import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'

// Galeria imersiva de transição: fecha o bloco "parque/day use" e
// mergulha o visitante no universo emocional (haras, pousada, eventos).
// Colagem de 7 fotos que dá zoom conforme o scroll, terminando no
// pôr do sol — a assinatura do Rotieh — com atalhos pras próximas seções.

const FOTOS = [
  {
    src: '/fotos/piscina-por-do-sol.webp',
    alt: 'Pôr do sol refletido na piscina do Rotieh',
    // foto central — domina a tela no fim do zoom
    pos: {},
    size: 'h-[25vh] w-[70vw] md:w-[25vw]',
    scale: 4,
  },
  {
    src: '/fotos/haras-cavalo-passeio.webp',
    alt: 'Passeio a cavalo no Haras Rotieh',
    pos: { top: '-30vh', left: '5vw' },
    size: 'h-[30vh] w-[60vw] md:w-[35vw]',
    scale: 5,
  },
  {
    src: '/fotos/dayuse-criancas.webp',
    alt: 'Crianças brincando no parque aquático',
    pos: { top: '-10vh', left: '-25vw' },
    size: 'h-[45vh] w-[28vw] md:w-[20vw]',
    scale: 6,
  },
  {
    src: '/fotos/camping-noite.webp',
    alt: 'Acampamento à noite sob o céu do sertão',
    pos: { left: '27.5vw' },
    size: 'h-[25vh] w-[30vw] md:w-[25vw]',
    scale: 5,
  },
  {
    src: '/fotos/pousada-chale-varanda.webp',
    alt: 'Varanda do chalé da pousada',
    pos: { top: '27.5vh', left: '5vw' },
    size: 'h-[25vh] w-[35vw] md:w-[20vw]',
    scale: 6,
  },
  {
    src: '/fotos/eventos-casamento.webp',
    alt: 'Casamento celebrado no Rotieh',
    pos: { top: '27.5vh', left: '-22.5vw' },
    size: 'h-[25vh] w-[50vw] md:w-[30vw]',
    scale: 8,
  },
  {
    src: '/fotos/dayuse-grupo.webp',
    alt: 'Grupo de amigos aproveitando o day use',
    pos: { top: '22.5vh', left: '25vw' },
    size: 'h-[15vh] w-[30vw] md:w-[15vw]',
    scale: 9,
  },
]

const ATALHOS = [
  ['Conhecer o Haras', '#haras'],
  ['Dormir na Pousada', '#pousada'],
  ['Celebrar um Evento', '#eventos'],
]

export default function GaleriaZoom() {
  const container = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scales = FOTOS.map((f) =>
    // hooks em loop são estáveis aqui: FOTOS é constante de módulo
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(scrollYProgress, [0, 1], [1, f.scale])
  )

  const clamp01 = (v) => Math.min(1, Math.max(0, v))
  const hintOpacity = useTransform(scrollYProgress, (v) => clamp01(1 - v / 0.12))
  const finalOpacity = useTransform(scrollYProgress, (v) => clamp01((v - 0.72) / 0.2))
  const finalY = useTransform(scrollYProgress, (v) => 24 * (1 - clamp01((v - 0.72) / 0.2)))
  const finalPointer = useTransform(scrollYProgress, (v) => (v > 0.8 ? 'auto' : 'none'))

  if (reduceMotion) return <GaleriaEstatica />

  return (
    <section aria-label="Galeria do Rotieh" ref={container} className="relative h-[300vh] bg-bark-2">
      <div className="sticky top-0 h-screen overflow-hidden">
        {FOTOS.map((foto, index) => (
          <motion.div
            key={foto.src}
            style={{ scale: scales[index] }}
            className="absolute top-0 flex h-full w-full items-center justify-center"
          >
            <div className={`relative ${foto.size}`} style={foto.pos}>
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </motion.div>
        ))}

        {/* dica de scroll no início */}
        <motion.p
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.35em] text-cream/80"
        >
          Continue rolando
        </motion.p>

        {/* revelação final: frase + atalhos pras próximas seções */}
        <motion.div
          style={{ opacity: finalOpacity, pointerEvents: finalPointer }}
          className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-bark-2 via-bark-2/40 to-transparent px-6 pb-16 text-center md:pb-24"
        >
          <motion.div style={{ y: finalY }} className="flex flex-col items-center">
            <span className="text-sm font-semibold text-gold uppercase tracking-[0.3em]">( O Rotieh inteiro )</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-[1.05] tracking-[0.03em] text-cream md:text-6xl">O dia de piscina é só o começo</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
              Quando o sol começa a se pôr, o Rotieh mostra o que tem de mais raro:
              cavalos, céu limpo e o interior do jeito que a memória guarda.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {ATALHOS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-cream/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream backdrop-blur-sm transition hover:border-cream hover:bg-cream hover:text-bark"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Fallback acessível: grid simples pra quem prefere menos movimento
function GaleriaEstatica() {
  return (
    <section aria-label="Galeria do Rotieh" className="bg-bark-2 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <span className="text-sm font-semibold text-gold uppercase tracking-[0.3em]">( O Rotieh inteiro )</span>
        <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-[1.05] tracking-[0.03em] text-cream md:text-6xl">O dia de piscina é só o começo</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {FOTOS.map((foto) => (
            <img
              key={foto.src}
              src={foto.src}
              alt={foto.alt}
              loading="lazy"
              className="h-44 w-full rounded-xl object-cover md:h-56"
            />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {ATALHOS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-cream/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream backdrop-blur-sm transition hover:border-cream hover:bg-cream hover:text-bark"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
