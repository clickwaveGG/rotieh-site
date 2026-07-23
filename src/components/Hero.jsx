import { IMG } from '../data.js'
import { Sw, Oval } from './ui.jsx'

export default function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] overflow-hidden">
      <picture>
        <source media="(max-width: 767px)" srcSet={IMG.heroMobile} />
        <img
          src={IMG.hero}
          alt="Piscina principal do Rotieh ao entardecer"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      {/* grade quente estilo editorial */}
      <div className="absolute inset-0 bg-gradient-to-b from-bark-2/55 via-bark-2/10 to-bark-2/60" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-baseline gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-cream/90 md:text-[11px]">
          <span className="font-display text-lg leading-none">(</span>
          América Dourada — Bahia
          <span className="font-display text-lg leading-none">)</span>
        </span>

        <h1 className="mt-6 font-display uppercase leading-[0.95] text-cream">
          <span className="block text-[15vw] tracking-[0.04em] md:text-[9vw]">
            Seu <Sw>o</Sw>ásis
          </span>
          <span className="block text-[15vw] tracking-[0.04em] md:text-[9vw]">
            no sert<Sw>ã</Sw>o
          </span>
        </h1>

        <p className="mt-7 max-w-md text-[13px] leading-relaxed text-cream/85 md:text-sm">
          O lugar da região pra celebrar: casamentos, aniversários e festas com
          o espaço inteiro só pro seu grupo — e chalés pra quem quer escapar a
          dois.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Oval href="#eventos" dark>
            Quero celebrar aqui
          </Oval>
          <Oval href="#pousada" dark>
            Chalé pra dois
          </Oval>
        </div>
      </div>

      {/* meta editorial nos cantos inferiores */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden items-end justify-between px-10 pb-8 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cream/70">
          Casamentos & Festas · Pousada · Haras
        </span>
        <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-cream/70">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Aberto todos os dias — reservas antecipadas
        </span>
      </div>
    </section>
  )
}
