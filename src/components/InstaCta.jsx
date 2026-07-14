import { IMG, INSTAGRAM } from '../data.js'

export default function InstaCta() {
  return (
    <section className="mx-3 md:mx-4">
      <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[28px] py-16">
        <img src={IMG.instaCta} alt="Paisagem dourada" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink-2/20" />

        <div className="relative mx-6 max-w-md rounded-[28px] bg-white p-8 text-center shadow-2xl">
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-ink md:text-3xl">
            Acompanhe o Rotieh de pertinho
          </h2>
          <div className="relative mt-6 overflow-hidden rounded-2xl">
            <img src={IMG.instaCard} alt="Fim de tarde no Rotieh" className="h-44 w-full object-cover" />
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 m-auto flex h-fit w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-lg transition hover:scale-105"
            >
              <IgIcon />
              Seguir no Instagram
            </a>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink/60">
            Avisos de funcionamento, promoções e os melhores momentos do parque —
            tudo primeiro no nosso Instagram.
          </p>
        </div>
      </div>
    </section>
  )
}

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
