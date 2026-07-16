import { PRECOS, wa } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

export default function Precos() {
  return (
    <section id="dayuse" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Label>Day Use</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
            Chegou, pag<Sw>o</Sw>u,
            <br />
            aproveit<Sw>o</Sw>u
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-bark/60">
          Sábados, domingos e feriados, das 9h às 17h. Sem reserva pra day use —
          só chegar.
        </p>
      </div>

      <div className="mt-14 grid border-t border-bark/15 md:grid-cols-3">
        {PRECOS.map((p, idx) => (
          <div
            key={p.titulo}
            className={`flex flex-col border-b border-bark/15 px-0 py-9 md:border-b-0 md:border-r md:px-9 md:first:pl-0 md:last:border-r-0 ${
              p.destaque ? 'md:bg-olive/10' : ''
            }`}
          >
            <div className="flex items-baseline justify-between">
              <Num n={idx + 1} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bark/50">
                {p.titulo}
              </span>
            </div>
            <p className="mt-8 font-display text-6xl text-bark md:text-7xl">
              {p.preco}
              {p.sufixo && (
                <span className="ml-1 font-sans text-xs font-medium uppercase tracking-[0.2em] text-bark/50">
                  {p.sufixo}
                </span>
              )}
            </p>
            <ul className="mt-8 space-y-3 border-t border-bark/15 pt-6">
              {p.itens.map((item) => (
                <li key={item} className="text-[13px] leading-relaxed text-bark/70">
                  {item}
                </li>
              ))}
            </ul>
            <Oval
              href={wa(`Olá! Quero garantir meu Day Use no Rotieh (${p.titulo}) 🌊`)}
              target="_blank"
              solid={p.destaque}
              className="mt-9 w-fit"
            >
              Garantir ingresso
            </Oval>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-bark/40">
        *Valores ilustrativos do protótipo — sujeitos a confirmação
      </p>
    </section>
  )
}
