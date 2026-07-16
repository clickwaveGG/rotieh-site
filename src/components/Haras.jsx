import { IMG, wa } from '../data.js'
import { Sw, Label, Num, Frame, Oval } from './ui.jsx'

const VIVENCIAS = [
  'Cavalgada ao pôr do sol',
  'Passeio de pônei para as crianças',
  'Vivência rural e fotos com os cavalos',
]

export default function Haras() {
  return (
    <section id="haras" className="bg-bark-2 px-6 pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <Frame tone="cream">
          <img
            src={IMG.haras}
            alt="Cavalo do Haras Rotieh ao pôr do sol"
            className="h-80 w-full object-cover md:h-[520px]"
            loading="lazy"
          />
        </Frame>

        <div>
          <Label tone="gold">Haras Rotieh</Label>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1.05] tracking-[0.03em] text-cream md:text-6xl">
            Tudo começ<Sw>o</Sw>u
            <br />
            com os cav<Sw>a</Sw>los
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
            Antes do parque, o Rotieh já era haras — e essa é a nossa assinatura.
            Nenhum outro lazer da região oferece a vivência rural de verdade,
            com o pôr do sol dourado que deu nome à cidade.
          </p>

          <ul className="mt-8 border-t border-cream/20">
            {VIVENCIAS.map((item, idx) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-cream/20 py-4">
                <Num n={idx + 1} tone="cream" />
                <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-cream/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Oval
            href={wa('Olá! Quero agendar uma experiência no Haras Rotieh 🐎')}
            target="_blank"
            dark
            className="mt-9"
          >
            Agendar experiência
          </Oval>
        </div>
      </div>
    </section>
  )
}
