import { IMG, wa, INSTAGRAM } from '../data.js'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[600px] overflow-hidden rounded-[28px]">
      <picture>
        <source media="(max-width: 767px)" srcSet={IMG.heroMobile} />
        <img src={IMG.hero} alt="Piscina principal do Rotieh" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-2/70 via-transparent to-black/10" />

      {/* badge de status de funcionamento */}
      <div className="absolute left-4 top-20 z-10 md:left-7 md:top-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          Aberto hoje · 9h às 17h
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            Mergulhe, relaxe e redescubra os prazeres simples
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
            Parque aquático, pousada e haras num só lugar. O oásis de América Dourada,
            a 40 minutos de Irecê — água fresca o ano inteiro no coração do sertão.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#dayuse"
              className="rounded-full bg-aqua px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-aqua/30 transition hover:bg-aqua-deep"
            >
              Garanta seu Day Use
            </a>
            <a
              href="#pousada"
              className="rounded-full border border-white/40 bg-white/15 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/30"
            >
              Reserve sua estadia
            </a>
          </div>
        </div>

        <div className="hidden flex-col gap-2 md:flex">
          {[
            ['Instagram', INSTAGRAM],
            ['WhatsApp', wa('Olá! Vim pelo site do Rotieh 👋')],
            ['Google Maps', 'https://maps.google.com/?q=América+Dourada+BA'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-2 text-center text-xs font-semibold text-ink transition hover:bg-sand"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
