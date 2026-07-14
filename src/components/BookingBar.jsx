import { useState } from 'react'
import { wa } from '../data.js'

const EXPERIENCIAS = ['Day Use', 'Hospedagem', 'Evento privado', 'Cavalgada']

export default function BookingBar() {
  const [data, setData] = useState('')
  const [exp, setExp] = useState(EXPERIENCIAS[0])
  const [pessoas, setPessoas] = useState('2')

  const msg = `Olá! Quero reservar: ${exp} · ${pessoas} pessoa(s)${data ? ` · dia ${data.split('-').reverse().join('/')}` : ''}. Pode me ajudar?`

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
        Planeje sua visita
      </h2>

      <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-10">
        <Field label="Data da visita">
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full bg-transparent py-3 text-sm font-medium text-ink outline-none"
          />
        </Field>

        <Field label="Experiência">
          <select
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            className="w-full appearance-none bg-transparent py-3 text-sm font-medium text-ink outline-none"
          >
            {EXPERIENCIAS.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </Field>

        <Field label="Pessoas">
          <select
            value={pessoas}
            onChange={(e) => setPessoas(e.target.value)}
            className="w-full appearance-none bg-transparent py-3 text-sm font-medium text-ink outline-none"
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
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-sand transition hover:bg-ink-2"
        >
          Reservar no WhatsApp
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <div className="border-b border-ink/15">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">{label}</span>
      {children}
    </div>
  )
}
