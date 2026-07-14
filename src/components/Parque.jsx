import { IMG, ATRACOES } from '../data.js'

export default function Parque() {
  return (
    <section id="parque" className="mx-3 rounded-[28px] bg-sand-2 px-6 py-16 md:mx-4 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[auto_1fr_1fr] md:gap-12">
          <span className="text-sm font-semibold text-ink/50">[O Parque]</span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            Diversão de verdade, pertinho de você
          </h2>
          <div>
            <p className="text-sm leading-relaxed text-ink/70">
              Nascido do Haras Rotieh, o complexo cresceu pra virar o maior lazer da
              região de Irecê: piscinas, toboáguas, quiosques e comida boa — num clima
              de família que só o interior tem. Sem pegar estrada pra praia.
            </p>
            <a
              href="#dayuse"
              className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand transition hover:bg-ink-2"
            >
              Ver o Day Use
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="flex flex-col rounded-[28px] bg-ink p-8 text-sand">
            <h3 className="text-2xl font-bold leading-snug">
              Água fresca o ano inteiro
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sand/70">
              No semiárido não tem baixa temporada: o sol garante o clima de férias
              todo fim de semana.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {ATRACOES.map((a) => (
                <li key={a} className="rounded-full border border-sand/25 px-3 py-1.5 text-xs font-medium text-sand/90">
                  {a}
                </li>
              ))}
            </ul>
            <a
              href="#dayuse"
              className="mt-auto inline-block w-fit rounded-full bg-gold px-6 py-3 pt-3 text-sm font-semibold text-ink-2 transition hover:bg-gold-deep hover:text-white"
            >
              Preços do Day Use
            </a>
          </div>
          <img src={IMG.parqueA} alt="Piscinas do parque" className="h-72 w-full rounded-[28px] object-cover md:h-auto" />
          <img src={IMG.parqueB} alt="Vista aérea do complexo" className="h-72 w-full rounded-[28px] object-cover md:h-auto" />
        </div>
      </div>
    </section>
  )
}
