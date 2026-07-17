import { IMG, OCASIOES, EXTRAS } from '../data.js'
import { Sw, Label, Num, Frame, Oval } from './ui.jsx'

export default function Eventos() {
  return (
    <section id="eventos" className="border-y border-bark/15 bg-cream-2/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <Label>Eventos & Celebrações</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-6xl">
            Seu grande di<Sw>a</Sw>,
            <br />
            no <Sw>o</Sw>ásis
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bark/70">
            Com a locação completa, o espaço inteiro vira o cenário da sua
            celebração — estrutura, natureza e privacidade pra viver o dia do
            seu jeito.
          </p>
          <Frame className="mt-10 hidden md:block">
            <img
              src={IMG.eventos}
              alt="Casamento celebrado no Rotieh"
              className="h-80 w-full object-cover"
              loading="lazy"
            />
          </Frame>
        </div>

        <div>
          <ul className="border-t border-bark/15">
            {OCASIOES.map((o, idx) => (
              <li key={o} className="flex items-baseline gap-4 border-b border-bark/15 py-4">
                <Num n={idx + 1} />
                <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-bark/85">
                  {o}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 bg-olive p-8 md:p-10">
            <p className="font-display text-2xl uppercase tracking-[0.03em] text-cream md:text-3xl">
              Serviços à parte
            </p>
            <dl className="mt-5">
              {EXTRAS.map(([servico, valor]) => (
                <div
                  key={servico}
                  className="flex items-baseline justify-between gap-4 border-b border-cream/25 py-3 last:border-b-0"
                >
                  <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-cream/90">
                    {servico}
                  </dt>
                  <dd className="whitespace-nowrap font-display text-base italic text-cream">{valor}</dd>
                </div>
              ))}
            </dl>
            <Oval href="#reserva" dark className="mt-8">
              Montar meu evento
            </Oval>
          </div>
        </div>
      </div>
    </section>
  )
}
