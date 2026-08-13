import { CARDAPIO } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

// Seção do restaurante (story 1.15). O cardápio aparece só em texto: é o que se
// lê no celular, o que o Google enxerga e o único lugar com preço — as artes da
// cozinha ficaram de fora enquanto trazem os valores antigos (story 1.18).

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
            manhã ao jantar, com refeições, massas, porções, lanches e bebidas
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

        {/* A faixa com as artes do cardápio saiu do ar na story 1.18: os preços
            estão impressos nas imagens, são os de julho, e passaram a
            contradizer a tabela acima — água a R$ 5 no texto e R$ 3 na arte.
            O bloco está guardado em CARDAPIO_ARTES e volta assim que a cozinha
            mandar as artes com os valores novos. */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Oval href="#reserva">Montar reserva</Oval>
          <Oval href="#modalidades">Ver modalidades</Oval>
        </div>
      </div>
    </section>
  )
}
