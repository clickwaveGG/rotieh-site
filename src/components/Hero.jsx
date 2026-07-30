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
      {/* Véu editorial. O miolo subiu de /10 pra /35 quando o subtítulo cresceu
          (story 1.9): o texto cai justo na faixa clara da água e ficava ilegível. */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/55 via-teal-deep/35 to-teal-deep/60" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-baseline gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-cream/90 md:text-[11px]">
          <span className="font-display text-lg leading-none">(</span>
          América Dourada — Bahia
          <span className="font-display text-lg leading-none">)</span>
        </span>

        {/* Título de 3 linhas (era 2): cada linha com nowrap e escala reduzida
            pra não rebentar em telas de celular. */}
        <h1 className="mt-5 font-display uppercase leading-[0.95] text-cream">
          <span className="block whitespace-nowrap text-[11vw] tracking-[0.04em] md:text-[7.5vw]">
            Seu <Sw>r</Sw>efúgio
          </span>
          <span className="block whitespace-nowrap text-[11vw] tracking-[0.04em] md:text-[7.5vw]">
            no interior
          </span>
          <span className="block whitespace-nowrap text-[11vw] tracking-[0.04em] md:text-[7.5vw]">
            da B<Sw>a</Sw>hia
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-cream md:text-sm">
          Hospedagem, lazer e eventos em um só lugar. Uma estrutura de alto
          padrão, cercada pela natureza, onde conforto, sofisticação e
          tranquilidade se encontram para criar momentos inesquecíveis.
        </p>

        {/* Dois caminhos de reserva, cada um com a sua explicação — pedido da
            cliente: o visitante precisa entender a diferença antes de clicar. */}
        <div className="mt-7 grid w-full max-w-2xl gap-5 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-2">
            <Oval href="#pousada" dark>
              Reservar chalé
            </Oval>
            <p className="max-w-[14rem] text-[10.5px] leading-snug text-cream/75">
              Hospedagem para quem deseja descansar em meio à natureza
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Oval href="#eventos" dark>
              Reservar o espaço
            </Oval>
            <p className="max-w-[14rem] text-[10.5px] leading-snug text-cream/75">
              Locação completa para day use, confraternizações, casamentos e
              eventos
            </p>
          </div>
        </div>
      </div>

      {/* meta editorial nos cantos inferiores */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden items-end justify-between px-10 pb-8 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cream/70">
          Chalés · Casamentos & Festas · Haras
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
