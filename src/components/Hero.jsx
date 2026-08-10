import { IMG } from '../data.js'
import { Sw, Oval } from './ui.jsx'

export default function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] overflow-hidden">
      <picture>
        <source media="(max-width: 767px)" srcSet={IMG.heroMobile} />
        <img
          src={IMG.hero}
          alt="Piscina principal da Rotieh ao entardecer"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      {/* Véu editorial. Subiu pra /35 no miolo quando o subtítulo cresceu
          (story 1.9) e voltou a aliviar quando a hero foi enxugada (story 1.16):
          menos texto sobre a água, menos escurecimento necessário. */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/48 via-teal-deep/28 to-teal-deep/55" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Título de 3 linhas (era 2): cada linha com nowrap e escala reduzida
            pra não rebentar em telas de celular. */}
        <h1 className="font-display uppercase leading-[0.95] text-cream">
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

        {/* Uma frase só. O resto do texto que morava aqui — localização,
            parágrafo de apresentação, explicação sob cada botão e a faixa
            inferior — saiu na story 1.16: a hero é a foto, não o folheto. */}
        <p className="mt-5 text-[13px] leading-relaxed text-cream md:text-sm">
          Hospedagem, lazer e eventos em um só lugar.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Oval href="#pousada" dark>
            Reservar chalé
          </Oval>
          <Oval href="#eventos" dark>
            Reservar o espaço
          </Oval>
        </div>
      </div>
    </section>
  )
}
