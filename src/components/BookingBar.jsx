import { useState } from 'react'
import { wa } from '../data.js'
import { Sw } from './ui.jsx'

const EXPERIENCIAS = ['Day Use', 'Hospedagem', 'Evento privado', 'Cavalgada']

export default function BookingBar() {
  const [data, setData] = useState('')
  const [exp, setExp] = useState(EXPERIENCIAS[0])
  const [pessoas, setPessoas] = useState('2')

  const msg = `Olá! Quero reservar: ${exp} · ${pessoas} pessoa(s)${data ? ` · dia ${data.split('-').reverse().join('/')}` : ''}. Pode me ajudar?`

  return (
    <section id="planejar" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      {/* boas-vindas editorial */}
      <div className="flex flex-col items-center text-center">
        <span className="font-display text-4xl text-bark">
          <Sw>R</Sw>
        </span>
        <p className="mt-6 max-w-xl text-[11px] font-medium uppercase leading-[2] tracking-[0.22em] text-bark/70">
          Bem-vindo ao Rotieh — um santuário de água, sombra e sertão em
          América Dourada. Nascido como haras, crescido como oásis: piscinas,
          pousada e cavalgadas no mesmo pedaço de chão dourado.
        </p>
        <span aria-hidden className="mt-10 block h-16 w-px bg-bark/25" />
      </div>

      {/* planejador em hairlines */}
      <div className="mt-14 border-y border-bark/15">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto]">
          <Field label="Data da visita" className="md:border-r md:border-bark/15">
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-bark outline-none"
            />
          </Field>
          <Field label="Experiência" className="md:border-r md:border-bark/15">
            <select
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              className="w-full appearance-none bg-transparent py-3 text-sm text-bark outline-none"
            >
              {EXPERIENCIAS.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </Field>
          <Field label="Pessoas" className="md:border-r md:border-bark/15">
            <select
              value={pessoas}
              onChange={(e) => setPessoas(e.target.value)}
              className="w-full appearance-none bg-transparent py-3 text-sm text-bark outline-none"
            >
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>
          <a
            href={wa(msg)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 border-t border-bark/15 bg-bark px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream transition hover:bg-bark-2 md:border-t-0"
          >
            Reservar
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 12h18m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block px-1 py-4 md:px-6 ${className}`}>
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-bark/50">
        {label}
      </span>
      {children}
    </label>
  )
}
