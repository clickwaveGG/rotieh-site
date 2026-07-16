import { useState } from 'react'
import { QUARTOS, wa } from '../data.js'
import { Sw, Label, Arrow, Oval } from './ui.jsx'

export default function Pousada() {
  const [i, setI] = useState(0)
  const q = QUARTOS[i]
  const next = () => setI((i + 1) % QUARTOS.length)
  const prev = () => setI((i - 1 + QUARTOS.length) % QUARTOS.length)

  return (
    <section id="pousada" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <div className="flex flex-col items-center text-center">
        <Label>Pousada</Label>
        <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
          Acorde no <Sw>o</Sw>ásis
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bark/70">
          Chalés e suítes a poucos passos das piscinas e do haras — com café
          regional e acesso livre ao parque durante toda a estadia.
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-0 md:grid-cols-[1.25fr_1fr]">
        <div className="relative overflow-hidden">
          <img
            key={q.img}
            src={q.img}
            alt={q.nome}
            className="h-80 w-full object-cover md:h-[540px]"
          />
        </div>

        <div className="flex flex-col border border-bark/15 bg-cream p-8 md:border-l-0 md:p-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bark/50">
            {String(i + 1).padStart(2, '0')} / {String(QUARTOS.length).padStart(2, '0')}
          </span>
          <h3 className="mt-3 font-display text-3xl text-bark md:text-4xl">{q.nome}</h3>

          <dl className="mt-6 grid grid-cols-2 gap-y-4 border-y border-bark/15 py-5">
            {[
              ['Capacidade', q.capacidade],
              ['Diária', `${q.preco}*`],
              ['Café da manhã', 'Incluso'],
              ['Parque aquático', 'Acesso livre'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-bark/50">{k}</dt>
                <dd className="mt-1 text-sm font-medium text-bark">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-bark/70">{q.desc}</p>

          <div className="mt-auto flex items-center justify-between pt-8">
            <Oval href={wa(`Olá! Quero reservar a acomodação "${q.nome}" na pousada do Rotieh 🏡`)} target="_blank">
              Reservar
            </Oval>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Acomodação anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bark/30 text-bark transition hover:bg-bark hover:text-cream"
              >
                <Arrow flip className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Próxima acomodação"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bark/30 text-bark transition hover:bg-bark hover:text-cream"
              >
                <Arrow className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-bark/40">
        *Valores ilustrativos do protótipo — sujeitos a confirmação
      </p>
    </section>
  )
}
