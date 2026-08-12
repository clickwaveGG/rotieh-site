import { CARDAPIO, CARDAPIO_ARTES } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

// Seção do restaurante (story 1.15). O cardápio aparece duas vezes de propósito:
// em texto, que é o que se lê no celular e o que o Google enxerga, e nas artes
// que a cozinha divulga — clicáveis, porque a 260px de largura ninguém lê preço.

export default function Restaurante() {
  return (
    <section id="restaurante" className="border-y border-teal/15 bg-cream-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <Label>O Restaurante</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-teal md:text-7xl">
            Comida de <Sw>c</Sw>asa
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-teal/70">
            O restaurante fica dentro do espaço, com cozinha própria: do café da
            manhã ao jantar, com refeições, porções, lanches, açaí e bebidas
            servidos à parte da diária. Quem prefere preparar a própria comida
            tem duas cozinhas e três áreas com churrasqueira à disposição na
            locação completa.
          </p>
        </div>

        {/* Cardápio em texto, recolhido por grupo (story 1.17). A seção subiu
            para o meio alto do site e 45 itens com preço abertos viravam uma
            parede antes dos chalés. Cada grupo é uma sanfona no mesmo padrão das
            perguntas do FAQ; os títulos ficam à vista e são a própria chamada
            ("Refeições", "Porções", "Açaí"). O texto continua no HTML — details
            fechado é lido pelos buscadores. */}
        <div className="mt-14 border-t border-teal/15">
          {CARDAPIO.map((g, idx) => (
            <details key={g.grupo} className="group border-b border-teal/15 py-5">
              <summary className="flex cursor-pointer list-none items-baseline gap-5">
                <Num n={idx + 1} />
                <span className="flex-1 text-sm font-semibold uppercase tracking-[0.15em] text-teal">
                  {g.grupo}
                </span>
                <span className="font-display text-2xl leading-none text-teal/60 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              {g.nota && (
                <p className="mt-3 text-[11px] leading-relaxed text-teal/50">{g.nota}</p>
              )}
              <dl className="mt-3">
                {g.itens.map(([item, preco]) => (
                  <div
                    key={item}
                    className="flex items-baseline justify-between gap-4 border-b border-teal/10 py-2.5 last:border-b-0"
                  >
                    <dt className="text-[13px] leading-snug text-teal/75">{item}</dt>
                    <dd className="shrink-0 text-[13px] font-medium text-teal">{preco}</dd>
                  </div>
                ))}
              </dl>
            </details>
          ))}
        </div>

        {/* Artes do cardápio. A faixa rola com o dedo por conta do overflow —
            não precisa de JS — e cada arte abre em tamanho real ao tocar. */}
        <div className="mt-16">
          <div className="flex items-baseline justify-between gap-4 border-b border-teal/15 pb-4">
            <h3 className="font-display text-2xl uppercase tracking-[0.03em] text-teal md:text-3xl">
              O cardápio da casa
            </h3>
            <span className="text-right text-[10px] font-medium uppercase tracking-[0.2em] text-teal/45">
              Toque para ampliar
            </span>
          </div>
          <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3">
            {CARDAPIO_ARTES.map(([src, alt]) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noreferrer"
                className="w-52 shrink-0 snap-start overflow-hidden md:w-60"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                />
              </a>
            ))}
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-teal/40">
            Arraste para o lado para ver todo o cardápio
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Oval href="#reserva">Montar reserva</Oval>
          <Oval href="#modalidades">Ver modalidades</Oval>
        </div>
      </div>
    </section>
  )
}
