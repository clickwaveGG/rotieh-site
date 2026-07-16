import { FAQ } from '../data.js'
import { Sw, Label } from './ui.jsx'

export default function Faq() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <Label>Antes de vir</Label>
        <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-6xl">
          Pergunt<Sw>a</Sw>s?
        </h2>
      </div>

      <div className="mt-12 border-t border-bark/15">
        {FAQ.map(({ q, a }, idx) => (
          <details key={q} className="group border-b border-bark/15 py-6">
            <summary className="flex cursor-pointer list-none items-baseline gap-5">
              <span className="font-display text-sm italic text-bark/50">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-[15px] font-medium text-bark">{q}</span>
              <span className="font-display text-2xl leading-none text-bark/60 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 pl-10 pr-8 text-sm leading-relaxed text-bark/65">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
