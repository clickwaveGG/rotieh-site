import { useState } from 'react'
import { brl, dataBR, hojeISO, novaReserva, CHALES, TIPOS } from './store.js'
import { StatusBadge } from './Agenda.jsx'

const FILTROS = ['todas', 'pendente', 'confirmada', 'check-in', 'concluída', 'cancelada']

export default function Reservas({ dados, atualizar }) {
  const [filtro, setFiltro] = useState('todas')
  const [busca, setBusca] = useState('')
  const [formAberto, setFormAberto] = useState(false)

  const lista = dados.reservas
    .filter((r) => filtro === 'todas' || r.status === filtro)
    .filter((r) => r.cliente.toLowerCase().includes(busca.toLowerCase()))
    .sort((a, b) => a.checkin.localeCompare(b.checkin))

  const mudarStatus = (id, status) => {
    atualizar({
      ...dados,
      reservas: dados.reservas.map((r) => (r.id === id ? { ...r, status } : r)),
    })
  }

  const adicionar = (campos) => {
    atualizar({ ...dados, reservas: [...dados.reservas, novaReserva(campos)] })
    setFormAberto(false)
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar por nome…"
          className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-aqua md:max-w-xs"
        />
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {FILTROS.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold capitalize transition ${
                filtro === f ? 'bg-ink text-sand' : 'bg-white text-ink/60 hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          onClick={() => setFormAberto(true)}
          className="shrink-0 rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-aqua/25 transition hover:bg-aqua-deep"
        >
          + Nova reserva
        </button>
      </div>

      <div className="space-y-3">
        {lista.length === 0 && (
          <p className="rounded-[22px] bg-white px-4 py-10 text-center text-sm text-ink/50 shadow-sm">
            Nenhuma reserva encontrada.
          </p>
        )}
        {lista.map((r) => (
          <div key={r.id} className="rounded-[22px] bg-white p-4 shadow-sm md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold md:flex ${r.checkin === hojeISO() ? 'bg-aqua text-white' : 'bg-sand text-ink/70'}`}>
                  {r.checkin.slice(8, 10)}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{r.cliente}</p>
                  <p className="mt-0.5 text-xs text-ink/60">
                    {dataBR(r.checkin)}{r.checkout ? ` → ${dataBR(r.checkout)}` : ''} · {r.tipo}
                    {r.chale ? ` · ${r.chale}` : ''} · {r.pessoas} pessoas · {r.telefone}
                  </p>
                  {r.obs && <p className="mt-1 text-xs italic text-ink/45">“{r.obs}”</p>}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 md:flex-col md:items-end">
                <div className="flex items-center gap-2">
                  <StatusBadge status={r.status} />
                  <span className="text-sm font-bold text-ink">{brl(Number(r.valor) || 0)}</span>
                </div>
                <div className="flex gap-1.5">
                  {r.status === 'pendente' && <Acao onClick={() => mudarStatus(r.id, 'confirmada')}>Confirmar</Acao>}
                  {r.status === 'confirmada' && <Acao onClick={() => mudarStatus(r.id, 'check-in')}>Check-in</Acao>}
                  {r.status === 'check-in' && <Acao onClick={() => mudarStatus(r.id, 'concluída')}>Concluir</Acao>}
                  {(r.status === 'pendente' || r.status === 'confirmada') && (
                    <Acao vermelho onClick={() => mudarStatus(r.id, 'cancelada')}>Cancelar</Acao>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {formAberto && <FormReserva onSalvar={adicionar} onFechar={() => setFormAberto(false)} />}
    </div>
  )
}

function Acao({ children, onClick, vermelho }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
        vermelho
          ? 'border border-terra/30 text-terra hover:bg-terra/10'
          : 'bg-ink text-sand hover:bg-ink-2'
      }`}
    >
      {children}
    </button>
  )
}

function FormReserva({ onSalvar, onFechar }) {
  const [f, setF] = useState({
    cliente: '', telefone: '', tipo: 'Day Use', chale: '',
    checkin: hojeISO(), checkout: '', pessoas: 2, valor: '', obs: '',
  })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const ok = f.cliente.trim() && f.checkin && Number(f.pessoas) > 0

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink-2/50 p-3 backdrop-blur-sm md:items-center" onClick={onFechar}>
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[28px] bg-white p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-ink">Nova reserva</h3>

        <div className="mt-5 space-y-4">
          <Campo label="Nome do cliente *">
            <input value={f.cliente} onChange={set('cliente')} placeholder="ex: Maria José Souza" className={inputCls} autoFocus />
          </Campo>
          <Campo label="Telefone / WhatsApp">
            <input value={f.telefone} onChange={set('telefone')} placeholder="74 9…" className={inputCls} />
          </Campo>

          <div className="grid grid-cols-2 gap-4">
            <Campo label="Tipo">
              <select value={f.tipo} onChange={set('tipo')} className={inputCls}>
                {TIPOS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Campo>
            <Campo label="Pessoas *">
              <input type="number" min="1" value={f.pessoas} onChange={set('pessoas')} className={inputCls} />
            </Campo>
          </div>

          {f.tipo === 'Pousada' && (
            <Campo label="Acomodação">
              <select value={f.chale} onChange={set('chale')} className={inputCls}>
                <option value="">Selecionar…</option>
                {CHALES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Campo>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Campo label={f.tipo === 'Pousada' ? 'Check-in *' : 'Data *'}>
              <input type="date" value={f.checkin} onChange={set('checkin')} className={inputCls} />
            </Campo>
            {f.tipo === 'Pousada' && (
              <Campo label="Check-out">
                <input type="date" value={f.checkout} onChange={set('checkout')} className={inputCls} />
              </Campo>
            )}
          </div>

          <Campo label="Valor previsto (R$)">
            <input type="number" min="0" value={f.valor} onChange={set('valor')} placeholder="0" className={inputCls} />
          </Campo>
          <Campo label="Observações">
            <textarea value={f.obs} onChange={set('obs')} rows="2" placeholder="ex: aniversário, decoração, chegada cedo…" className={inputCls} />
          </Campo>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={onFechar} className="flex-1 rounded-full border border-ink/15 py-3 text-sm font-semibold text-ink/60 transition hover:bg-sand">
            Cancelar
          </button>
          <button
            disabled={!ok}
            onClick={() => onSalvar({ ...f, pessoas: Number(f.pessoas), valor: Number(f.valor) || 0 })}
            className="flex-1 rounded-full bg-aqua py-3 text-sm font-semibold text-white transition enabled:hover:bg-aqua-deep disabled:opacity-40"
          >
            Salvar reserva
          </button>
        </div>
      </div>
    </div>
  )
}

const inputCls =
  'w-full rounded-xl border border-ink/15 bg-sand px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-aqua'

function Campo({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/50">{label}</span>
      {children}
    </label>
  )
}
