import { useRef, useState } from 'react'
import { QUARTO, selecionarModalidade } from '../data.js'
import { Sw, Label, Arrow, Oval } from './ui.jsx'

// Distância que o dedo precisa percorrer para a foto virar (px).
const LIMIAR = 60
// Antes disso o gesto ainda não tem eixo definido — evita roubar a rolagem.
const FOLGA = 8

// O padding superior entrou na Story 1.12: antes a seção vinha logo depois do
// bloco de resumo e herdava o respiro dele; agora vem depois dos ambientes,
// que fecham com borda.
export default function Pousada() {
  const [i, setI] = useState(0)
  const fotos = QUARTO.fotos
  const next = () => setI((i + 1) % fotos.length)
  const prev = () => setI((i - 1 + fotos.length) % fotos.length)

  // Arrasto lateral: o gesto natural no celular. As setas continuam valendo.
  const [arrasto, setArrasto] = useState(0)
  const gesto = useRef(null)

  const aoPressionar = (e) => {
    gesto.current = { x: e.clientX, y: e.clientY, eixo: null, dx: 0 }
  }

  const aoMover = (e) => {
    const g = gesto.current
    if (!g) return
    const dx = e.clientX - g.x
    const dy = e.clientY - g.y

    // O eixo só é decidido depois da folga: se o visitante está rolando a
    // página, o carrossel não interfere.
    if (g.eixo === null) {
      if (Math.abs(dx) < FOLGA && Math.abs(dy) < FOLGA) return
      g.eixo = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
      if (g.eixo === 'x') e.currentTarget.setPointerCapture(e.pointerId)
    }
    if (g.eixo === 'x') {
      // O deslocamento fica no ref além do estado: o `pointerup` pode chegar
      // antes do React re-renderizar com o último valor.
      g.dx = dx
      setArrasto(dx)
    }
  }

  const aoSoltar = () => {
    const g = gesto.current
    gesto.current = null
    if (g?.eixo === 'x') {
      if (g.dx <= -LIMIAR) next()
      else if (g.dx >= LIMIAR) prev()
    }
    setArrasto(0)
  }

  const arrastando = arrasto !== 0

  return (
    <section id="pousada" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <Label>Chalés</Label>
        <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-teal md:text-7xl">
          Acorde no <Sw>r</Sw>efúgio
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-teal/70">
          Reserve um chalé e acorde aqui: são 10 chalés com diária de 24 horas
          a partir do check-in que você escolher — e acesso completo a piscina,
          lounges, redários e toda a estrutura do espaço.
        </p>
        {/* Preço em destaque a pedido da cliente (Story 1.19): o valor estava
            só na ficha e o pessoal continuava perguntando no WhatsApp. */}
        <p className="mt-8 flex items-baseline gap-3 text-teal">
          <span className="font-display text-5xl md:text-6xl">{QUARTO.preco}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em]">a diária de 24h</span>
        </p>
        <p className="mt-2 text-[13px] text-teal">
          {QUARTO.precoGrupo} cada reservando os {QUARTO.total} chalés
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-0 md:grid-cols-[1.25fr_1fr]">
        <div
          className="relative cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing"
          onPointerDown={aoPressionar}
          onPointerMove={aoMover}
          onPointerUp={aoSoltar}
          onPointerCancel={aoSoltar}
        >
          <img
            key={fotos[i]}
            src={fotos[i]}
            alt="Chalé da Rotieh"
            draggable={false}
            style={{
              transform: `translateX(${arrasto * 0.35}px)`,
              // Enquanto o dedo está na tela a foto acompanha sem atraso; ao
              // soltar, a duração da classe volta e ela desliza de volta.
              transitionDuration: arrastando ? '0ms' : undefined,
            }}
            className="h-80 w-full select-none object-cover transition-transform duration-300 motion-reduce:transition-none md:h-[560px]"
          />
          <span className="absolute bottom-4 left-4 bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
            {String(i + 1).padStart(2, '0')} / {String(fotos.length).padStart(2, '0')}
          </span>
          {/* Dica só no celular: sem ela o gesto fica escondido. Fundo sólido
              translúcido em vez de blur — o blur trava o Safari do iPhone. */}
          <span className="pointer-events-none absolute bottom-4 right-4 bg-teal-deep/45 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream md:hidden">
            arraste para o lado
          </span>
        </div>

        <div className="flex flex-col border border-teal/15 bg-cream p-8 md:border-l-0 md:p-10">
          <h3 className="font-display text-3xl text-teal md:text-4xl">Chalé Rotieh</h3>

          <dl className="mt-6 grid grid-cols-2 gap-y-4 border-y border-teal/15 py-5">
            {[
              ['Diária (24h)', `${QUARTO.preco}*`],
              ['Reservando os 10', `${QUARTO.precoGrupo} cada`],
              ['Chalés', `${QUARTO.total} disponíveis`],
              ['Check-in', 'No seu horário'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-teal/50">{k}</dt>
                <dd className="mt-1 text-sm font-medium text-teal">{v}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {QUARTO.estrutura.map((item) => (
              <li key={item} className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal/60">
                {item}
              </li>
            ))}
          </ul>

          {/* Regra de alimentação da cliente (Story 1.19, áudio de 04/11):
              no chalé as refeições são no restaurante; só entra carne pra
              assar, e dieta específica é a exceção. */}
          <p className="mt-5 text-[13px] leading-relaxed text-teal/70">
            Reservando os 10 chalés, a estrutura fica exclusiva pro seu grupo —
            perfeito pra famílias e turmas de amigos.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-teal">
            Refeições feitas no restaurante do espaço, à parte da diária. Não é
            permitida a entrada de comidas nem bebidas — apenas carne para
            assar, com os acompanhamentos pedidos no restaurante. Tem dieta
            específica? Avise a equipe na reserva.
          </p>

          <div className="mt-auto flex items-center justify-between pt-8">
            <Oval href="#reserva" onClick={() => selecionarModalidade('quartos')}>
              Reservar chalé
            </Oval>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Foto anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/30 text-teal transition hover:bg-teal hover:text-cream"
              >
                <Arrow flip className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Próxima foto"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/30 text-teal transition hover:bg-teal hover:text-cream"
              >
                <Arrow className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-teal/40">
        *Em breve também chalés família, triplos e com camas individuais
      </p>
    </section>
  )
}
