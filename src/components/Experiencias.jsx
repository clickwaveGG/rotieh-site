import { useRef } from 'react'
import { EXPERIENCIAS, wa } from '../data.js'
import { Sw, Label, Arrow, Frame, Oval } from './ui.jsx'

export default function Experiencias() {
  const track = useRef(null)
  const scroll = (dir) =>
    track.current?.scrollBy({ left: dir * (track.current.clientWidth * 0.7), behavior: 'smooth' })

  return (
    <section id="experiencias" className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Label>Experiências</Label>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
              Um dia não d<Sw>á</Sw>
              <br />
              pra viver tud<Sw>o</Sw>
            </h2>
          </div>
          <div className="flex items-center gap-3 md:pb-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bark/30 text-bark transition hover:bg-bark hover:text-cream"
            >
              <Arrow flip className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Próximo"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bark/30 text-bark transition hover:bg-bark hover:text-cream"
            >
              <Arrow className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:px-[max(1.5rem,calc((100vw-72rem)/2))]"
      >
        {EXPERIENCIAS.map((e, idx) => (
          <Frame key={e.titulo} className="w-64 shrink-0 snap-start md:w-72">
            <figure>
              <img
                src={e.img}
                alt={e.titulo}
                loading="lazy"
                className="h-72 w-full object-cover md:h-80"
              />
              <figcaption className="pt-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-bark">
                    {e.titulo}
                  </h3>
                  <span className="font-display text-xs italic text-bark/50">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-bark/60">{e.desc}</p>
              </figcaption>
            </figure>
          </Frame>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Oval href={wa('Olá! Quero saber mais sobre as experiências do Rotieh ✨')} target="_blank">
          Planejar minha visita
        </Oval>
      </div>
    </section>
  )
}
