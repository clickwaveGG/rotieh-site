// Otimiza o acervo enviado pelo cliente (2026-07-25) para public/fotos/.
// Uso: node scripts/otimizar-fotos.mjs [pasta-origem]
// Regra: maior lado <= 1600px, webp q78 — nenhum original de 3-28MB vai pro bundle.
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const ORIGEM = process.argv[2] ?? 'C:/Users/PC/Downloads/drive-download-20260725T151112Z-1-001'
const DESTINO = 'public/fotos'

// Curadoria da story 1.5 — mapa foto do cliente → nome semântico no site.
const SELECAO = [
  // chalés
  ['IMG_6317.jpg', 'aerea-quadra'], // vista aérea da quadra + piscina (não é fachada)
  ['IMG_5728.jpg', 'chale-varanda'],
  ['IMG_8358.jpg', 'chales-noite'],
  ['IMG_8297.jpg', 'chale-entardecer'],
  // quartos
  ['IMG_8298.jpg', 'quarto-led'],
  ['IMG_8299.jpg', 'quarto-toalhas'],
  ['IMG_8309.jpg', 'quarto-vista-palmeiras'],
  // piscina
  ['IMG_5112.png', 'piscina-entardecer-banhistas'],
  ['IMG_6384.jpg', 'piscina-ceu'],
  ['IMG_9619.jpg', 'piscina-guarda-sol'],
  ['IMG_9590.jpg', 'piscina-lounge-por-do-sol'],
  ['IMG_3628.jpg', 'piscina-grupo-amigas'],
  // restaurante / gastronomia
  ['IMG_6502.jpg', 'salao-restaurante'],
  ['IMG_2396.jpg', 'familia-almoco-piscina'],
  // áreas comuns / ambientes
  ['IMG_5096.jpg', 'aerea-complexo'],
  ['IMG_5094.jpg', 'aerea-vertical'],
  ['IMG_6490.jpg', 'quadra-society'],
  ['IMG_9570.jpg', 'sala-jogos'],
  ['IMG_6500.jpg', 'lounge-palha'],
  ['IMG_6497.jpg', 'cadeiras-macrame'],
  ['IMG_6467.jpg', 'pergolado-jardim'],
  ['IMG_6325.jpg', 'haras-picadeiro'], // picadeiro de areia do haras
  ['IMG_9270.jpg', 'hidro-noite'],
  ['IMG_9683.jpg', 'cabanas-lounge'],
  ['IMG_6492.jpg', 'alameda-redes'],
  ['IMG_5106.jpg', 'redes-por-do-sol'],
  ['IMG_7981.jpg', 'camping-deck'],
  ['IMG_7533.jpg', 'piscina-terraco'],
  // casamentos
  ['IMG_1662.jpg', 'casamento-cerimonia'],
  ['IMG_5842.jpg', 'casinha-arvore'], // casinha na árvore + playground
  ['IMG_0505.jpg', 'casamento-casal-buque'],
  ['IMG_5116.png', 'casamento-noiva-veu'],
  ['IMG_1747.jpg', 'casamento-buque'],
  ['IMG_0500.jpg', 'casamento-casal-jardim'],
  // festas
  ['IMG_5113.png', 'festa-pista-danca'],
  ['IMG_5114.png', 'festa-corredor-fogos'],
  ['IMG_5115.png', 'festa-deck-decorado'],
  ['IMG_5110.png', 'festa-debutante'],
  ['IMG_4398.jpg', 'festa-bolo'],
  ['IMG_4382.jpg', 'festa-mesa-bolo'],
  ['IMG_6587.jpg', 'festa-piscina'],
  // haras
  ['IMG_2259.jpg', 'haras-casal-cavalo'],
  ['IMG_3189.jpg', 'haras-dois-cavalos'],
  ['IMG_6470.jpg', 'haras-pergolado-cavalo'],
  // hero / emocional
  ['IMG_0494.jpg', 'casal-jardim-chales'],
]

// Envio complementar da cliente (2026-07-29, story 1.9): ela pediu que o card de
// hidromassagem mostrasse a banheira em si — a foto antiga (hidro-noite) mostrava
// o redário à noite com a banheira ao fundo. Pasta de origem própria.
const LOTE_HIDRO = {
  origem: 'C:/Users/PC/Downloads/drive-download-20260730T003919Z-1-001',
  fotos: [
    ['IMG_5471.jpg', 'hidro-banheira'], // banheira sob o pergolado, de dia
    // IMG_5470.jpg (casal na banheira à noite) recebida no mesmo envio, sem uso
    // definido — a cliente pediu só a foto do ambiente.
  ],
}

// Cada lote carrega a própria pasta de origem; o primeiro aceita override por argv.
const LOTES = [
  { origem: ORIGEM, fotos: SELECAO },
  LOTE_HIDRO,
]

mkdirSync(DESTINO, { recursive: true })

const TODAS = LOTES.flatMap(({ origem, fotos }) =>
  fotos.map(([src, nome]) => [join(origem, src), nome]),
)

let ok = 0
for (const [entrada, nome] of TODAS) {
  const saida = join(DESTINO, `${nome}.webp`)
  try {
    const info = await sharp(entrada)
      .rotate() // respeita EXIF
      .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(saida)
    ok++
    console.log(`${entrada} -> ${nome}.webp (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB)`)
  } catch (e) {
    console.error(`FALHA ${entrada}: ${e.message}`)
  }
}
console.log(`\n${ok}/${TODAS.length} fotos otimizadas em ${DESTINO}/`)
