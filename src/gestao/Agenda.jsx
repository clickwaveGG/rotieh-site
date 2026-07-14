import { useMemo, useState } from 'react'
import { brl, dataBR, hojeISO, pessoasNoDia, nivelDoDia } from './store.js'

const DIAS_SEMANA = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

const iso = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

export default function Agenda({ dados, irPara }) {
  const hoje = hojeISO()
  const [ano, setAno] = useState(Number(hoje.slice(0, 4)))
  const [mes, setMes] = useState(Number(hoje.slice(5, 7)) - 1)
  const [diaSel, setDiaSel] = useState(hoje)

  const reservasAtivas = dados.reservas.filter((r) => r.status !== 'cancelada')

  const doDia = (d) =>
    reservasAtivas
      .filter((r) => (r.checkout ? d >= r.checkin && d < r.checkout : r.checkin === d))
      .sort((a, b) => b.pessoas - a.pessoas)

  const reservasHoje = doDia(hoje)
  const pessoasHoje = pessoasNoDia(reservasAtivas, hoje)
  const chalesOcupados = new Set(
    reservasHoje.filter((r) => r.tipo === 'Pousada' && r.chale).map((r) => r.chale)
  ).size
  const receitaMes = dados.reservas
    .filter((r) => r.status !== 'cancelada' && r.checkin.slice(0, 7) === hoje.slice(0, 7))
    .reduce((s, r) => s + (Number(r.valor) || 0), 0)

  const grade = useMemo(() => {
    const primeiro = new Date(ano, mes, 1)
    const nDias = new Date(ano, mes + 1, 0).getDate()
    const células = Array(primeiro.getDay()).fill(null)
    for (let d = 1; d <= nDias; d++) células.push(d)
    return células
  }, [ano, mes])

  const mudarMes = (delta) => {
    const m = mes + delta
    if (m < 0) { setMes(11); setAno(ano - 1) }
    else if (m > 11) { setMes(0); setAno(ano + 1) }
    else setMes(m)
  }

  const selecionadas = doDia(diaSel)
  const pessoasSel = pessoasNoDia(reservasAtivas, diaSel)
  const nivelSel = nivelDoDia(pessoasSel)

  return (
    <div className="space-y-6">
      {/* KPIs de hoje */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <Kpi titulo="Reservas hoje" valor={reservasHoje.length} sub={dataBR(hoje)} />
        <Kpi titulo="Pessoas previstas" valor={pessoasHoje} sub={nivelDoDia(pessoasHoje).label} />
        <Kpi titulo="Chalés ocupados" valor={`${chalesOcupados}/4`} sub="pousada" />
        <Kpi titulo="Receita do mês" valor={brl(receitaMes)} sub="reservas ativas" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* calendário de ocupação */}
        <section className="rounded-[28px] bg-white p-5 shadow-sm md:p-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-ink">Mapa de ocupação</h2>
            <div className="flex items-center gap-2">
              <BotaoSeta onClick={() => mudarMes(-1)} flip />
              <span className="w-36 text-center text-sm font-semibold capitalize text-ink/80">
                {MESES[mes]} {ano}
              </span>
              <BotaoSeta onClick={() => mudarMes(1)} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-7 gap-1.5">
            {DIAS_SEMANA.map((d) => (
              <span key={d} className="pb-1 text-center text-[11px] font-bold uppercase tracking-wide text-ink/40">
                {d}
              </span>
            ))}
            {grade.map((d, i) => {
              if (!d) return <span key={`v${i}`} />
              const dIso = iso(ano, mes, d)
              const pessoas = pessoasNoDia(reservasAtivas, dIso)
              const nivel = nivelDoDia(pessoas)
              const éHoje = dIso === hoje
              const selecionado = dIso === diaSel
              return (
                <button
                  key={dIso}
                  onClick={() => setDiaSel(dIso)}
                  className={`flex aspect-square flex-col items-center justify-center rounded-xl text-sm font-semibold transition ${nivel.cor} ${
                    selecionado ? 'ring-2 ring-ink' : éHoje ? 'ring-2 ring-aqua' : 'hover:ring-1 hover:ring-ink/30'
                  }`}
                >
                  {d}
                  {pessoas > 0 && <span className="text-[10px] font-bold opacity-80">{pessoas}</span>}
                </button>
              )
            })}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold">
            <Legenda cor="bg-aqua/15" label="Tranquilo (até 30)" />
            <Legenda cor="bg-gold/25" label="Movimentado (31–90)" />
            <Legenda cor="bg-terra/20" label="Lotado (90+)" />
          </div>
        </section>

        {/* dia selecionado */}
        <section className="rounded-[28px] bg-white p-5 shadow-sm md:p-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-ink">
              {diaSel === hoje ? 'Hoje' : dataBR(diaSel)}
            </h2>
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${nivelSel.cor}`}>
              {pessoasSel} pessoas · {nivelSel.label}
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {selecionadas.length === 0 && (
              <p className="rounded-2xl bg-sand px-4 py-6 text-center text-sm text-ink/50">
                Nenhuma reserva para este dia.
              </p>
            )}
            {selecionadas.map((r) => (
              <div key={r.id} className="rounded-2xl border border-ink/10 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-ink">{r.cliente}</p>
                    <p className="mt-0.5 text-xs text-ink/60">
                      {r.tipo}{r.chale ? ` · ${r.chale}` : ''} · {r.pessoas} pessoas
                      {r.checkout ? ` · até ${dataBR(r.checkout)}` : ''}
                    </p>
                    {r.obs && <p className="mt-1.5 text-xs italic text-ink/50">“{r.obs}”</p>}
                  </div>
                  <div className="text-right">
                    <StatusBadge status={r.status} />
                    <p className="mt-1 text-xs font-bold text-ink">{brl(Number(r.valor) || 0)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => irPara('reservas')}
            className="mt-5 w-full rounded-full bg-ink py-3 text-sm font-semibold text-sand transition hover:bg-ink-2"
          >
            Gerenciar reservas →
          </button>
        </section>
      </div>
    </div>
  )
}

function Kpi({ titulo, valor, sub }) {
  return (
    <div className="rounded-[22px] bg-white p-4 shadow-sm md:p-5">
      <p className="text-[11px] font-bold uppercase tracking-wide text-ink/45">{titulo}</p>
      <p className="mt-1 text-2xl font-bold text-ink md:text-3xl">{valor}</p>
      <p className="mt-0.5 text-xs font-medium capitalize text-ink/50">{sub}</p>
    </div>
  )
}

function Legenda({ cor, label }) {
  return (
    <span className="flex items-center gap-1.5 text-ink/60">
      <span className={`h-3 w-3 rounded ${cor}`} /> {label}
    </span>
  )
}

function BotaoSeta({ onClick, flip }) {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-sand"
      aria-label={flip ? 'Mês anterior' : 'Próximo mês'}
    >
      <svg viewBox="0 0 24 24" className={`h-4 w-4 ${flip ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="m9 6 6 6-6 6" />
      </svg>
    </button>
  )
}

export function StatusBadge({ status }) {
  const cores = {
    pendente: 'bg-gold/20 text-gold-deep',
    confirmada: 'bg-aqua/15 text-aqua-deep',
    'check-in': 'bg-ink text-sand',
    'concluída': 'bg-ink/10 text-ink/60',
    cancelada: 'bg-terra/15 text-terra line-through',
  }
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-bold capitalize ${cores[status] || ''}`}>
      {status}
    </span>
  )
}
