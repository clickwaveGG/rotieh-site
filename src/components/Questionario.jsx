import { useEffect, useState } from 'react'
import { wa } from '../data.js'
import { Sw, Label } from './ui.jsx'

// Pré-atendimento: o cliente responde as perguntas antes de ir pro
// WhatsApp — a equipe recebe a mensagem estruturada e o atendimento
// já começa com as informações principais (valores são passados lá).

const MODOS = [
  { id: 'evento', label: 'Casamento, aniversário ou festa' },
  { id: 'locacao', label: 'Locação completa do espaço' },
  { id: 'quartos', label: 'Chalé / quartos' },
  { id: 'camping', label: 'Camping avulso' },
]

const TIPOS_EVENTO = [
  'Casamento',
  'Aniversário',
  '15 anos',
  'Formatura',
  'Batizado',
  'Confraternização',
  'Evento corporativo',
  'Outro',
]

const ALIMENTACAO = [
  'Restaurante do Rotieh',
  'Vamos levar alimentos e usar a cozinha',
  'Ainda vamos decidir',
]

const EXTRAS_OPCOES = [
  'Passeio a cavalo',
  'Ensaio fotográfico externo',
  'Ensaio fotográfico interno',
]

const fmt = (d) => (d ? d.split('-').reverse().join('/') : '')

export default function Questionario() {
  const [modo, setModo] = useState('evento')
  const [tipoEvento, setTipoEvento] = useState(TIPOS_EVENTO[0])
  const [nome, setNome] = useState('')
  const [entrada, setEntrada] = useState('')
  const [saida, setSaida] = useState('')
  const [pessoas, setPessoas] = useState('')
  const [quartos, setQuartos] = useState('1')
  const [barracas, setBarracas] = useState('1')
  const [pernoite, setPernoite] = useState(false)
  const [alimentacao, setAlimentacao] = useState(ALIMENTACAO[2])
  const [extras, setExtras] = useState([])
  const [obs, setObs] = useState('')

  const toggleExtra = (e) =>
    setExtras((xs) => (xs.includes(e) ? xs.filter((x) => x !== e) : [...xs, e]))

  // Botões "Saber mais" dos produtos pré-selecionam a modalidade aqui
  useEffect(() => {
    const onModalidade = (e) => {
      if (MODOS.some((m) => m.id === e.detail)) setModo(e.detail)
    }
    window.addEventListener('rotieh:modalidade', onModalidade)
    return () => window.removeEventListener('rotieh:modalidade', onModalidade)
  }, [])

  const modoLabel = MODOS.find((m) => m.id === modo).label

  const linhas = [
    `Olá, Rotieh! Quero montar uma reserva 🌴`,
    ``,
    `• Modalidade: ${modoLabel}`,
    modo === 'evento' && `• Tipo de festa: ${tipoEvento}`,
    nome && `• Nome: ${nome}`,
    entrada && `• Chegada: ${fmt(entrada)}${saida ? ` · Saída: ${fmt(saida)}` : ''}`,
    pessoas && `• Pessoas: ±${pessoas}`,
    modo === 'quartos' && `• Quartos: ${quartos}`,
    (modo === 'locacao' || modo === 'evento') && `• Pernoite (18h às 8h): ${pernoite ? 'sim' : 'não'}`,
    modo === 'camping' && `• Barracas: ${barracas}`,
    `• Alimentação: ${alimentacao}`,
    extras.length > 0 && `• Extras: ${extras.join(', ')}`,
    obs && `• Observações: ${obs}`,
    ``,
    `Pode me confirmar disponibilidade e valores?`,
  ].filter(Boolean)

  const msg = linhas.join('\n')

  return (
    <section id="reserva" className="bg-bark-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <Label tone="gold">Monte sua reserva</Label>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1.05] tracking-[0.03em] text-cream md:text-6xl">
            Conta pra gente <Sw>o</Sw>
            <br />
            que você imagina
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            Responda rapidinho e a mensagem chega pronta no nosso WhatsApp.
            Com as informações principais em mãos, a equipe já responde com
            valores, disponibilidade e os próximos passos.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-14">
          <div>
            {/* modalidade */}
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/60">
              01 — O que você quer viver?
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {MODOS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setModo(m.id)}
                  className={`border px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
                    modo === m.id
                      ? 'border-gold bg-gold text-bark-2'
                      : 'border-cream/30 text-cream/80 hover:border-cream/60'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
            {modo === 'evento' && (
              <div className="mt-2 grid grid-cols-1">
                <Campo label="Que festa vamos receber?">
                  <select
                    value={tipoEvento}
                    onChange={(e) => setTipoEvento(e.target.value)}
                    className={inp + ' appearance-none [&>option]:text-bark'}
                  >
                    {TIPOS_EVENTO.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Campo>
              </div>
            )}

            {/* datas e pessoas */}
            <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/60">
              02 — Quando e quantos?
            </p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
              <Campo label="Chegada">
                <input type="date" value={entrada} onChange={(e) => setEntrada(e.target.value)} className={inp + ' [color-scheme:dark]'} />
              </Campo>
              <Campo label="Saída (opcional)">
                <input type="date" value={saida} onChange={(e) => setSaida(e.target.value)} className={inp + ' [color-scheme:dark]'} />
              </Campo>
              <Campo label="Nº de pessoas">
                <input type="number" min="1" placeholder="ex: 40" value={pessoas} onChange={(e) => setPessoas(e.target.value)} className={inp} />
              </Campo>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {modo === 'quartos' && (
                <Campo label="Quantos quartos? (10 disponíveis)">
                  <select value={quartos} onChange={(e) => setQuartos(e.target.value)} className={inp + ' appearance-none [&>option]:text-bark'}>
                    {['1','2','3','4','5','6','7','8','9','10 (espaço exclusivo)'].map((n) => <option key={n}>{n}</option>)}
                  </select>
                </Campo>
              )}
              {(modo === 'locacao' || modo === 'evento') && (
                <Campo label="Vão passar a noite?">
                  <button
                    type="button"
                    onClick={() => setPernoite(!pernoite)}
                    className="flex w-full items-center justify-between py-3 text-sm text-cream"
                  >
                    {pernoite ? 'Sim — com adicional noturno' : 'Não — só o dia (8h às 17h)'}
                    <span className={`ml-3 inline-flex h-5 w-10 shrink-0 items-center rounded-full border transition ${pernoite ? 'justify-end border-gold bg-gold' : 'justify-start border-cream/40'}`}>
                      <span className={`mx-0.5 h-3.5 w-3.5 rounded-full ${pernoite ? 'bg-bark-2' : 'bg-cream/60'}`} />
                    </span>
                  </button>
                </Campo>
              )}
              {modo === 'camping' && (
                <Campo label="Quantas barracas? (até 3 pessoas cada)">
                  <input type="number" min="1" value={barracas} onChange={(e) => setBarracas(e.target.value)} className={inp} />
                </Campo>
              )}
              <Campo label="Alimentação">
                <select value={alimentacao} onChange={(e) => setAlimentacao(e.target.value)} className={inp + ' appearance-none [&>option]:text-bark'}>
                  {ALIMENTACAO.map((a) => <option key={a}>{a}</option>)}
                </select>
              </Campo>
            </div>

            {/* extras */}
            <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/60">
              03 — Experiências extras
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {EXTRAS_OPCOES.map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => toggleExtra(e)}
                  className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
                    extras.includes(e)
                      ? 'border-gold bg-gold text-bark-2'
                      : 'border-cream/30 text-cream/75 hover:border-cream/60'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>

            {/* identificação */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2">
              <Campo label="Seu nome">
                <input type="text" placeholder="Como podemos te chamar?" value={nome} onChange={(e) => setNome(e.target.value)} className={inp} />
              </Campo>
              <Campo label="Observações (opcional)">
                <input type="text" placeholder="ex: aniversário de 15 anos" value={obs} onChange={(e) => setObs(e.target.value)} className={inp} />
              </Campo>
            </div>
          </div>

          {/* prévia da mensagem */}
          <div className="flex flex-col">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/60">
              Prévia da sua mensagem
            </p>
            <div className="mt-4 flex-1 border border-cream/25 bg-cream/5 p-6">
              <p className="whitespace-pre-line text-[13px] leading-[1.9] text-cream/90">{msg}</p>
            </div>
            <a
              href={wa(msg)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-bark-2 transition hover:bg-cream"
            >
              Enviar no WhatsApp
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.1-1.7 1.2-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .7-.2 1.2Z" />
              </svg>
            </a>
            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-cream/40">
              Sem compromisso — a equipe confirma tudo com você
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const inp =
  'w-full bg-transparent py-3 text-sm text-cream outline-none placeholder:text-cream/35'

function Campo({ label, children }) {
  return (
    <label className="block border-b border-cream/25 py-3 sm:pr-6">
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/55">
        {label}
      </span>
      {children}
    </label>
  )
}
