import { useState } from 'react'
import { QUARTOS, wa } from '../data.js'

export default function Pousada() {
  const [i, setI] = useState(0)
  const q = QUARTOS[i]
  const next = () => setI((i + 1) % QUARTOS.length)
  const prev = () => setI((i - 1 + QUARTOS.length) % QUARTOS.length)

  return (
    <section id="pousada" className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
      <div className="grid items-stretch gap-8 md:grid-cols-[1.15fr_1fr] md:gap-12">
        <img
          src={q.img}
          alt={q.nome}
          className="h-72 w-full rounded-[28px] object-cover md:h-[440px]"
        />

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{q.nome}</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {[q.capacidade, 'Café da manhã incluso', 'Acesso livre ao parque'].map((b) => (
              <span key={b} className="rounded-full bg-sand-2 px-3 py-1 text-xs font-semibold text-ink/70">
                {b}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/70">{q.desc}</p>

          <p className="mt-4 text-sm text-ink/60">
            a partir de{' '}
            <span className="text-2xl font-bold text-ink">{q.preco}</span>
            <span className="font-medium">/noite*</span>
          </p>

          <a
            href={wa(`Olá! Quero reservar a acomodação "${q.nome}" na pousada do Rotieh 🏡`)}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block w-fit rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-white transition hover:bg-aqua-deep"
          >
            Reservar esta acomodação
          </a>

          <div className="mt-auto flex items-end justify-between pt-8">
            <img
              src={QUARTOS[(i + 1) % QUARTOS.length].thumb}
              alt="Próxima acomodação"
              className="h-24 w-36 cursor-pointer rounded-2xl object-cover transition hover:opacity-80"
              onClick={next}
            />
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-ink/50">
                {i + 1} / {QUARTOS.length}
              </span>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition hover:bg-sand-2"
              >
                <Arrow flip />
              </button>
              <button
                onClick={next}
                aria-label="Próxima"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sand transition hover:bg-ink-2"
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink/40">*Valores ilustrativos do protótipo — sujeitos a confirmação.</p>
    </section>
  )
}

function Arrow({ flip }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 ${flip ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}
