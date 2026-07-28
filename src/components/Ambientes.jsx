import { AMBIENTES } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

// Pedido da cliente (2026-07-25): apresentar todos os ambientes do espaço,
// cada um com foto — mesclando cenário e gente curtindo ao longo do site.

export default function Ambientes() {
  return (
    <section id="ambientes" className="border-y border-teal/15 bg-cream-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <Label>Os Ambientes</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-teal md:text-7xl">
            Um mundo pra <Sw>e</Sw>xplorar
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-teal/70">
            O Rotieh é feito de muitos cantos: dos chalés à hidromassagem, da
            quadra ao redário. Conheça cada ambiente — todos inclusos pra quem
            se hospeda ou reserva o espaço.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {AMBIENTES.map((a, idx) => (
            <figure key={a.nome}>
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={a.nome}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
                />
              </div>
              <figcaption className="mt-4">
                <div className="flex items-baseline gap-3">
                  <Num n={idx + 1} />
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal">
                    {a.nome}
                  </h3>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-teal/65">{a.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* vista aérea fecha a seção situando o visitante no complexo */}
        <div className="relative mt-14 overflow-hidden">
          <img
            src="/fotos/aerea-complexo.webp"
            alt="Vista aérea do complexo Rotieh com piscina, quadra, picadeiros e chalés"
            loading="lazy"
            className="h-72 w-full object-cover md:h-[480px]"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 bg-gradient-to-t from-teal-deep/80 to-transparent px-6 pb-5 pt-16 md:px-8">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cream/85">
              O complexo visto de cima — piscina, quadra, picadeiros e chalés
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Oval href="#reserva">Quero conhecer</Oval>
        </div>
      </div>
    </section>
  )
}
