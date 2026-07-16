import { IMG, INSTAGRAM } from '../data.js'
import { Sw } from './ui.jsx'

export default function InstaCta() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden py-20">
      <img
        src={IMG.instaCta}
        alt="Pôr do sol dourado no Rotieh"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-bark-2/45" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="inline-flex items-baseline gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-cream/85">
          <span className="font-display text-lg leading-none">(</span>
          Siga o dia a dia
          <span className="font-display text-lg leading-none">)</span>
        </span>
        <h2 className="mt-5 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-cream md:text-7xl">
          O sertão d<Sw>o</Sw>urado,
          <br />
          t<Sw>o</Sw>do dia
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/80">
          Avisos de funcionamento, promoções e os melhores momentos do parque —
          tudo primeiro no nosso Instagram.
        </p>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-3 rounded-full border border-cream/50 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream backdrop-blur-sm transition hover:bg-cream hover:text-bark"
        >
          <IgIcon />
          Seguir no Instagram
        </a>
      </div>
    </section>
  )
}

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
