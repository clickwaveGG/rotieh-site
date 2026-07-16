import { IMG, ATRACOES } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

const PILARES = [
  ['Piscinas pra todo mundo', 'Adulto, kids e brinquedos infláveis — com salva-vidas o dia inteiro.'],
  ['Comida de interior', 'Restaurante regional e quiosques na beira da água.'],
  ['Clima de família', 'Redário, sombra, sala de jogos e espaço pra criançada correr solta.'],
]

export default function Parque() {
  return (
    <section id="parque" className="border-y border-bark/15 bg-cream-2/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
          <Label>O Parque</Label>
          <div>
            <h2 className="font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
              O que o sertão
              <br />
              <Sw>o</Sw>ferece?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-bark/70">
              Nascido do Haras Rotieh, o complexo virou o maior lazer da região
              de Irecê — água fresca o ano inteiro, sem pegar estrada pra praia.
            </p>
            <Oval href="#dayuse" className="mt-8">
              Ver o Day Use
            </Oval>
          </div>
        </div>

        <div className="mt-14 grid border-t border-bark/15 md:grid-cols-3">
          {PILARES.map(([titulo, desc], idx) => (
            <div
              key={titulo}
              className="border-b border-bark/15 py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <Num n={idx + 1} />
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-bark">
                {titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/65">{desc}</p>
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
            {ATRACOES.map((a) => (
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
