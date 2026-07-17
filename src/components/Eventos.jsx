import { IMG, OCASIOES } from '../data.js'
import { Sw, Label, Num, Frame, Oval } from './ui.jsx'

// Carro-chefe do Rotieh: casamentos, confraternizações e eventos.
// Reserva pela modalidade de locação completa do espaço.

const FICHA = [
  ['Diária do espaço', 'R$ 2.000 · 8h às 17h'],
  ['Festa noite adentro', '+ R$ 1.000 · 18h às 8h'],
  ['Capacidade', 'Até 100 pessoas'],
  ['Quartos p/ convidados', 'R$ 150 por quarto'],
]

export default function Eventos() {
  return (
    <section id="eventos" className="border-y border-bark/15 bg-cream-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <Label>Casamentos · Eventos · Celebrações</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
            Feito pra <Sw>c</Sw>elebrar
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-bark/70">
            O carro-chefe do Rotieh: o espaço inteiro, com exclusividade, pro
            seu casamento, confraternização ou grande evento — natureza,
            estrutura completa e a paisagem mais bonita da região.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Frame>
              <img
                src={IMG.eventos}
                alt="Casamento celebrado no Rotieh"
                className="h-80 w-full object-cover md:h-[440px]"
                loading="lazy"
              />
            </Frame>

            {/* ficha de valores — mesmas condições da locação completa */}
            <dl className="mt-8 border-t border-bark/15">
              {FICHA.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-bark/15 py-3.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bark/55">
                    {k}
                  </dt>
                  <dd className="whitespace-nowrap font-display text-base italic text-bark">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-bark/45">
              A reserva segue a modalidade de locação completa do espaço
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bark/50">
              O espaço recebe
            </p>
            <ul className="mt-4 border-t border-bark/15">
              {OCASIOES.map((o, idx) => (
                <li key={o} className="flex items-baseline gap-4 border-b border-bark/15 py-4">
                  <Num n={idx + 1} />
                  <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-bark/85">
                    {o}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Oval href="#reserva" solid>
                Montar meu evento
              </Oval>
              <Oval href="#modalidades">Ver todas as modalidades</Oval>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
