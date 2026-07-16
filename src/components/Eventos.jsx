import { useState } from 'react'
import { IMG, wa } from '../data.js'
import { Sw, Label, Frame } from './ui.jsx'

const TIPOS = ['Casamento', 'Aniversário de 15 anos', 'Formatura', 'Confraternização de empresa', 'Outro']

export default function Eventos() {
  const [tipo, setTipo] = useState(TIPOS[0])
  const [data, setData] = useState('')
  const [convidados, setConvidados] = useState('')

  const msg = `Olá! Quero um orçamento de evento no Rotieh: ${tipo}${data ? ` · data ${data.split('-').reverse().join('/')}` : ''}${convidados ? ` · ±${convidados} convidados` : ''}.`

  return (
    <section id="eventos" className="border-y border-bark/15 bg-cream-2/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <Label>Eventos</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-6xl">
            Seu grande di<Sw>a</Sw>,
            <br />
            no <Sw>o</Sw>ásis
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bark/70">
            Casamentos, 15 anos, formaturas e confraternizações com estrutura
            completa — espaço, gastronomia e a paisagem mais bonita da região.
          </p>
          <Frame className="mt-10 hidden md:block">
            <img
              src={IMG.eventos}
              alt="Casamento no salão de eventos do Rotieh"
              className="h-72 w-full object-cover"
              loading="lazy"
            />
          </Frame>
        </div>

        {/* painel oliva de orçamento (ref.: card "send us enquire") */}
        <div className="bg-olive p-8 md:p-12">
          <p className="font-display text-3xl uppercase leading-tight tracking-[0.03em] text-cream md:text-4xl">
            Peça seu
            <br />
            orçament<Sw>o</Sw>
          </p>
          <div className="mt-8 space-y-6">
            <PainelField label="Tipo de evento">
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="w-full appearance-none bg-transparent py-2.5 text-sm text-cream outline-none [&>option]:text-bark"
              >
                {TIPOS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </PainelField>
            <PainelField label="Data pretendida">
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full bg-transparent py-2.5 text-sm text-cream outline-none [color-scheme:dark]"
              />
            </PainelField>
            <PainelField label="Número de convidados">
              <input
                type="number"
                min="10"
                placeholder="ex: 150"
                value={convidados}
                onChange={(e) => setConvidados(e.target.value)}
                className="w-full bg-transparent py-2.5 text-sm text-cream outline-none placeholder:text-cream/40"
              />
            </PainelField>
          </div>
          <a
            href={wa(msg)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full border border-cream/60 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream transition hover:bg-cream hover:text-olive-deep"
          >
            Pedir orçamento
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 12h18m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function PainelField({ label, children }) {
  return (
    <label className="block border-b border-cream/30">
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/70">
        {label}
      </span>
      {children}
    </label>
  )
}
