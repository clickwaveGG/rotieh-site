import { useState } from 'react'
import { brl, dataBR, totalGasto, ultimaVisita, diasSemVir, novoCliente, TAGS } from './store.js'

export default function Clientes({ dados, atualizar }) {
  const [busca, setBusca] = useState('')
  const [tag, setTag] = useState('todos')
  const [abertoId, setAbertoId] = useState(null)
  const [formAberto, setFormAberto] = useState(false)

  const lista = dados.clientes
    .filter((c) => tag === 'todos' || (tag === 'sumidos' ? (diasSemVir(c) ?? 999) > 60 : c.tags.includes(tag)))
    .filter((c) =>
      (c.nome + c.cidade + c.telefone).toLowerCase().includes(busca.toLowerCase())
    )
    .sort((a, b) => totalGasto(b) - totalGasto(a))

  const aberto = dados.clientes.find((c) => c.id === abertoId)

  const salvarCliente = (atualizado) => {
    atualizar({
      ...dados,
      clientes: dados.clientes.map((c) => (c.id === atualizado.id ? atualizado : c)),
    })
  }

  const adicionar = (campos) => {
    const c = novoCliente(campos)
    atualizar({ ...dados, clientes: [...dados.clientes, c] })
    setFormAberto(false)
    setAbertoId(c.id)
  }

  const somaGasto = dados.clientes.reduce((s, c) => s + totalGasto(c), 0)
  const sumidos = dados.clientes.filter((c) => (diasSemVir(c) ?? 999) > 60).length

  return (
    <div className="space-y-5">
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <Kpi titulo="Clientes na base" valor={dados.clientes.length} />
        <Kpi titulo="Receita histórica" valor={brl(somaGasto)} />
        <Kpi titulo="Sumidos há 60+ dias" valor={sumidos} destaque={sumidos > 0} />
      </div>

      {/* busca e filtros */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar nome, cidade ou telefone…"
          className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-aqua md:max-w-xs"
        />
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {['todos', ...TAGS, 'sumidos'].map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold capitalize transition ${
                tag === t ? 'bg-ink text-sand' : 'bg-white text-ink/60 hover:text-ink'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button
          onClick={() => setFormAberto(true)}
          className="shrink-0 rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-aqua/25 transition hover:bg-aqua-deep"
        >
          + Novo cliente
        </button>
      </div>

      {/* lista */}
      <div className="grid gap-3 md:grid-cols-2">
        {lista.length === 0 && (
          <p className="rounded-[22px] bg-white px-4 py-10 text-center text-sm text-ink/50 shadow-sm md:col-span-2">
            Nenhum cliente encontrado.
          </p>
        )}
        {lista.map((c) => {
          const u = ultimaVisita(c)
          const dias = diasSemVir(c)
          return (
            <button
              key={c.id}
              onClick={() => setAbertoId(c.id)}
              className="rounded-[22px] bg-white p-5 text-left shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-2 text-sm font-bold text-ink/70">
                    {iniciais(c.nome)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{c.nome}</p>
                    <p className="text-xs text-ink/55">{c.cidade} · {c.visitas.length} visita{c.visitas.length === 1 ? '' : 's'}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-ink">{brl(totalGasto(c))}</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-sand-2 px-2.5 py-1 text-[10px] font-bold text-ink/60">{t}</span>
                ))}
                {u && (
                  <span className={`ml-auto rounded-full px-2.5 py-1 text-[10px] font-bold ${dias > 60 ? 'bg-terra/15 text-terra' : 'bg-aqua/10 text-aqua-deep'}`}>
                    {dias > 60 ? `sumido há ${dias} dias` : `última: ${dataBR(u.data)}`}
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {aberto && <Perfil cliente={aberto} onFechar={() => setAbertoId(null)} onSalvar={salvarCliente} />}
      {formAberto && <FormCliente onSalvar={adicionar} onFechar={() => setFormAberto(false)} />}
    </div>
  )
}

// ── Perfil do cliente ───────────────────────────────────────────────────────

function Perfil({ cliente: c, onFechar, onSalvar }) {
  const [notas, setNotas] = useState(c.notas)
  const dias = diasSemVir(c)
  const u = ultimaVisita(c)

  const msgRetorno = encodeURIComponent(
    `Olá, ${c.nome.split(' ')[0]}! Aqui é do Rotieh 🌴 Sentimos sua falta por aqui${
      u ? ` desde ${dataBR(u.data)}` : ''
    }! Que tal marcar uma nova visita? Temos novidades no parque e condições especiais pra quem já é de casa. 💙`
  )
  const fone = c.telefone.replace(/\D/g, '')

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink-2/50 p-3 backdrop-blur-sm md:items-center" onClick={onFechar}>
      <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[28px] bg-white p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand-2 text-lg font-bold text-ink/70">
              {iniciais(c.nome)}
            </span>
            <div>
              <h3 className="text-xl font-bold text-ink">{c.nome}</h3>
              <p className="text-sm text-ink/55">{c.cidade} · {c.telefone}</p>
            </div>
          </div>
          <button onClick={onFechar} className="rounded-full border border-ink/15 p-2 text-ink/50 transition hover:bg-sand" aria-label="Fechar">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <MiniKpi titulo="Visitas" valor={c.visitas.length} />
          <MiniKpi titulo="Total gasto" valor={brl(totalGasto(c))} />
          <MiniKpi titulo="Última visita" valor={u ? dataBR(u.data) : '—'} alerta={dias > 60 ? `há ${dias} dias` : null} />
        </div>

        {c.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {c.tags.map((t) => (
              <span key={t} className="rounded-full bg-sand-2 px-3 py-1 text-[11px] font-bold text-ink/60">{t}</span>
            ))}
          </div>
        )}

        {/* histórico */}
        <h4 className="mt-6 text-xs font-bold uppercase tracking-wide text-ink/50">Histórico de visitas</h4>
        <div className="mt-2 space-y-2">
          {c.visitas.length === 0 && (
            <p className="rounded-2xl bg-sand px-4 py-4 text-center text-sm text-ink/50">Ainda sem visitas registradas.</p>
          )}
          {[...c.visitas].sort((a, b) => b.data.localeCompare(a.data)).map((v, i) => (
            <div key={i} className="flex items-center justify-between rounded-2xl border border-ink/10 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-ink">
                  {v.tipo}{v.detalhe ? ` · ${v.detalhe}` : ''}
                </p>
                <p className="text-xs text-ink/55">
                  {dataBR(v.data)}{v.noites ? ` · ${v.noites} noite${v.noites > 1 ? 's' : ''}` : ''} · {v.pessoas} pessoas
                </p>
              </div>
              <span className="text-sm font-bold text-ink">{brl(v.gasto)}</span>
            </div>
          ))}
        </div>

        {/* notas */}
        <h4 className="mt-6 text-xs font-bold uppercase tracking-wide text-ink/50">Notas internas</h4>
        <textarea
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          onBlur={() => onSalvar({ ...c, notas })}
          rows="3"
          placeholder="Preferências, datas importantes, como gosta de ser atendido…"
          className="mt-2 w-full rounded-2xl border border-ink/15 bg-sand px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-aqua"
        />

        <a
          href={`https://wa.me/55${fone}?text=${msgRetorno}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white transition hover:brightness-95"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.1-1.7 1.2-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .7-.2 1.2Z" /></svg>
          Chamar de volta no WhatsApp
        </a>
        <p className="mt-2 text-center text-[11px] text-ink/40">
          Mensagem pronta de reativação — é só revisar e enviar.
        </p>
      </div>
    </div>
  )
}

// ── Novo cliente ────────────────────────────────────────────────────────────

function FormCliente({ onSalvar, onFechar }) {
  const [f, setF] = useState({ nome: '', telefone: '', cidade: '', tags: [], notas: '' })
  const toggleTag = (t) =>
    setF({ ...f, tags: f.tags.includes(t) ? f.tags.filter((x) => x !== t) : [...f.tags, t] })

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink-2/50 p-3 backdrop-blur-sm md:items-center" onClick={onFechar}>
      <div className="w-full max-w-lg rounded-[28px] bg-white p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-ink">Novo cliente</h3>
        <div className="mt-5 space-y-4">
          <input value={f.nome} onChange={(e) => setF({ ...f, nome: e.target.value })} placeholder="Nome completo *" className={inputCls} autoFocus />
          <div className="grid grid-cols-2 gap-4">
            <input value={f.telefone} onChange={(e) => setF({ ...f, telefone: e.target.value })} placeholder="Telefone" className={inputCls} />
            <input value={f.cidade} onChange={(e) => setF({ ...f, cidade: e.target.value })} placeholder="Cidade" className={inputCls} />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition ${
                  f.tags.includes(t) ? 'bg-ink text-sand' : 'bg-sand-2 text-ink/60 hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <textarea value={f.notas} onChange={(e) => setF({ ...f, notas: e.target.value })} rows="2" placeholder="Notas (preferências, indicação…)" className={inputCls} />
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={onFechar} className="flex-1 rounded-full border border-ink/15 py-3 text-sm font-semibold text-ink/60 transition hover:bg-sand">
            Cancelar
          </button>
          <button
            disabled={!f.nome.trim()}
            onClick={() => onSalvar(f)}
            className="flex-1 rounded-full bg-aqua py-3 text-sm font-semibold text-white transition enabled:hover:bg-aqua-deep disabled:opacity-40"
          >
            Salvar cliente
          </button>
        </div>
      </div>
    </div>
  )
}

const inputCls =
  'w-full rounded-xl border border-ink/15 bg-sand px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-aqua'

const iniciais = (nome) =>
  nome.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase()

function Kpi({ titulo, valor, destaque }) {
  return (
    <div className={`rounded-[22px] p-4 shadow-sm md:p-5 ${destaque ? 'bg-terra/10' : 'bg-white'}`}>
      <p className="text-[11px] font-bold uppercase tracking-wide text-ink/45">{titulo}</p>
      <p className={`mt-1 text-2xl font-bold md:text-3xl ${destaque ? 'text-terra' : 'text-ink'}`}>{valor}</p>
    </div>
  )
}

function MiniKpi({ titulo, valor, alerta }) {
  return (
    <div className="rounded-2xl bg-sand p-3 text-center">
      <p className="text-[10px] font-bold uppercase tracking-wide text-ink/45">{titulo}</p>
      <p className="mt-0.5 text-sm font-bold text-ink">{valor}</p>
      {alerta && <p className="text-[10px] font-bold text-terra">{alerta}</p>}
    </div>
  )
}
