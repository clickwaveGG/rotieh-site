import { IMG, ESTRUTURA } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

export default function Parque() {
  return (
    <section id="parque" className="border-y border-bark/15 bg-cream-2/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
          <Label>A Estrutura</Label>
          <div>
            <h2 className="font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
              O que o sertão
              <br />
              <Sw>o</Sw>ferece?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-bark/70">
              Um destino completo em meio à natureza: piscina com bar molhado,
              quadras, campo, restaurante e espaços de descanso — tudo pensado
              pra viver o dia inteiro sem pressa, inclusive com brinquedos
              adaptados para crianças autistas.
            </p>
            <Oval href="#modalidades" className="mt-8">
              Ver modalidades
            </Oval>
          </div>
        </div>

        <div className="mt-14 grid border-t border-bark/15 md:grid-cols-4">
          {ESTRUTURA.map((g, idx) => (
            <div
              key={g.grupo}
              className="border-b border-bark/15 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
            >
              <div className="flex items-baseline gap-3">
                <Num n={idx + 1} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-bark">
                  {g.grupo}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.itens.map((item) => (
                  <li key={item} className="text-[13px] leading-relaxed text-bark/65">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mt-6 overflow-hidden">
          <img
            src={IMG.parqueA}
            alt="Vista panorâmica das piscinas do Rotieh"
            className="h-80 w-full object-cover md:h-[560px]"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-6 gap-y-2 bg-gradient-to-t from-bark-2/80 to-transparent px-6 pb-5 pt-16 md:px-8">
            {['Aberto todos os dias', 'Somente com reserva', 'Até 100 pessoas na locação'].map((a) => (
              <span key={a} className="text-[10px] font-medium uppercase tracking-[0.25em] text-cream/85">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
