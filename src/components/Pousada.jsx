import { useState } from 'react'
import { QUARTO, selecionarModalidade } from '../data.js'
import { Sw, Label, Arrow, Oval } from './ui.jsx'

export default function Pousada() {
  const [i, setI] = useState(0)
  const fotos = QUARTO.fotos
  const next = () => setI((i + 1) % fotos.length)
  const prev = () => setI((i - 1 + fotos.length) % fotos.length)

  return (
    <section id="pousada" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <div className="flex flex-col items-center text-center">
        <Label>Pousada</Label>
        <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
          Acorde no <Sw>o</Sw>ásis
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bark/70">
          Não precisa de festa pra viver o Rotieh: alugue um chalé pra dois e
          acorde aqui. São 10 quartos com diária de 24 horas a partir do
          check-in que você escolher — e acesso completo a toda a estrutura.
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-0 md:grid-cols-[1.25fr_1fr]">
        <div className="relative overflow-hidden">
          <img
            key={fotos[i]}
            src={fotos[i]}
            alt="Quarto da pousada Rotieh"
            className="h-80 w-full object-cover md:h-[560px]"
          />
          <span className="absolute bottom-4 left-4 bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-bark">
            {String(i + 1).padStart(2, '0')} / {String(fotos.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex flex-col border border-bark/15 bg-cream p-8 md:border-l-0 md:p-10">
          <h3 className="font-display text-3xl text-bark md:text-4xl">Quarto Rotieh</h3>

          <dl className="mt-6 grid grid-cols-2 gap-y-4 border-y border-bark/15 py-5">
            {[
              ['Diária', '24 horas completas'],
              ['Quartos', `${QUARTO.total} disponíveis*`],
              ['Capacidade', QUARTO.capacidade],
              ['Check-in', 'No seu horário'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-bark/50">{k}</dt>
                <dd className="mt-1 text-sm font-medium text-bark">{v}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {QUARTO.estrutura.map((item) => (
              <li key={item} className="text-[11px] font-medium uppercase tracking-[0.18em] text-bark/60">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-[13px] leading-relaxed text-bark/70">
            Reservando os 10 quartos, a estrutura fica exclusiva pro seu grupo.
            Café da manhã e refeições à parte no restaurante do espaço — ou
            traga seus alimentos. {QUARTO.excecao}.
          </p>

          <div className="mt-auto flex items-center justify-between pt-8">
            <Oval href="#reserva" onClick={() => selecionarModalidade('quartos')}>
              Saber mais
            </Oval>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Foto anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bark/30 text-bark transition hover:bg-bark hover:text-cream"
              >
                <Arrow flip className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Próxima foto"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bark/30 text-bark transition hover:bg-bark hover:text-cream"
              >
                <Arrow className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-bark/40">
        *Em breve também quartos família, triplos e com camas individuais
      </p>
    </section>
  )
}
