import { useState } from 'react'
import { IMG, wa } from '../data.js'

const TIPOS = ['Casamento', 'Aniversário de 15 anos', 'Formatura', 'Confraternização de empresa', 'Outro']

export default function Eventos() {
  const [tipo, setTipo] = useState(TIPOS[0])
  const [data, setData] = useState('')
  const [convidados, setConvidados] = useState('')

  const msg = `Olá! Quero um orçamento de evento no Rotieh: ${tipo}${data ? ` · data ${data.split('-').reverse().join('/')}` : ''}${convidados ? ` · ±${convidados} convidados` : ''}.`

  return (
    <section id="eventos" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold text-ink/50">[Eventos]</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            Seu grande dia, no oásis
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Casamentos, 15 anos, formaturas e confraternizações com estrutura completa:
            espaço, gastronomia e a paisagem mais bonita da região. Conta pra gente o
            que você imagina e a nossa equipe monta o orçamento.
          </p>

          <div className="mt-8 space-y-5 rounded-[28px] border border-ink/10 bg-white p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block border-b border-ink/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">Tipo de evento</span>
                <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full appearance-none bg-transparent py-3 text-sm font-medium text-ink outline-none">
                  {TIPOS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label className="block border-b border-ink/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">Data pretendida</span>
                <input type="date" value={data} onChange={(e) => setData(e.target.value)} className="w-full bg-transparent py-3 text-sm font-medium text-ink outline-none" />
              </label>
            </div>
            <label className="block border-b border-ink/15">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">Número de convidados</span>
              <input
                type="number"
                min="10"
                placeholder="ex: 150"
                value={convidados}
                onChange={(e) => setConvidados(e.target.value)}
                className="w-full bg-transparent py-3 text-sm font-medium text-ink outline-none placeholder:text-ink/30"
              />
            </label>
            <a
              href={wa(msg)}
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold text-ink-2 transition hover:bg-gold-deep hover:text-white"
            >
              Pedir orçamento no WhatsApp
            </a>
          </div>
        </div>

        <img src={IMG.eventos} alt="Salão de eventos" className="h-80 w-full rounded-[28px] object-cover md:h-[540px]" />
      </div>
    </section>
  )
}
