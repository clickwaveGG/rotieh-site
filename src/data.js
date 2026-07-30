// Valores e regras atualizados com as informações oficiais do cliente (2026-07-16).

// WhatsApp oficial informado pela cliente em 2026-07-30: (74) 99912-9999.
export const WHATSAPP = '5574999129999'
// Instagram oficial informado pela cliente em 2026-07-30.
export const INSTAGRAM = 'https://www.instagram.com/rotieh.americadourada/'

export const wa = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

// Pré-seleciona a modalidade no questionário (#reserva) — usado pelos
// botões de reserva dos produtos. O Questionario escuta este evento.
export const selecionarModalidade = (id) =>
  window.dispatchEvent(new CustomEvent('rotieh:modalidade', { detail: id }))

// Fotos reais do empreendimento (acervo do Instagram + acervo enviado pela
// cliente em 2026-07-25, otimizado por scripts/otimizar-fotos.mjs)
export const IMG = {
  hero: '/fotos/hero-desktop.webp',
  heroMobile: '/fotos/hero-mobile.webp',
  heroPoster: '/fotos/piscina-principal.webp',
  parqueA: '/fotos/piscina-panorama.webp',
  parqueB: '/fotos/dayuse-inflaveis.webp',
  haras: '/fotos/haras-cavalo-por-do-sol.webp',
  harasAlt: '/fotos/haras-casal-cavalo.webp',
  restaurante: '/fotos/lazer-pizzas.webp',
  eventos: '/fotos/casamento-cerimonia.webp',
  instaCta: '/fotos/natureza-por-do-sol.webp',
  instaCard: '/fotos/dayuse-mae-filha.webp',
}

// 10 chalés padronizados. Diária = 24h a partir do check-in escolhido.
// Narrativa: hospedagem pra qualquer perfil — a capacidade é só ficha técnica.
// Preços públicos desde a Story 1.7 (valores oficiais da cliente, 2026-07-16).
export const QUARTO = {
  preco: 'R$ 350',
  precoGrupo: 'R$ 300',
  total: 10,
  capacidade: 'Até 2 pessoas + criança pequena',
  excecao: 'Casal com 1 criança pequena pode ficar no mesmo chalé',
  estrutura: ['Cama de casal', 'TV', 'Wi-Fi', 'Frigobar', 'Ar-condicionado', 'Banheiro privativo'],
  fotos: [
    '/fotos/pousada-chale-arquitetura.webp',
    '/fotos/quarto-led.webp',
    '/fotos/chale-varanda.webp',
    '/fotos/quarto-vista-palmeiras.webp',
    '/fotos/chales-noite.webp',
    '/fotos/quarto-toalhas.webp',
  ],
}

// Ambientes do empreendimento — pedido direto da cliente (2026-07-25):
// "uma parte informando sobre todos esses ambientes, complementada com fotos".
// Descrições inferidas do acervo fotográfico — validar texto oficial com a cliente.
export const AMBIENTES = [
  {
    img: '/fotos/chales-noite.webp',
    nome: 'Chalés',
    desc: 'Chalés modernos com varanda, fachada de vidro e conforto completo.',
  },
  {
    img: '/fotos/piscina-guarda-sol.webp',
    nome: 'Piscina, área de lazer e bar molhado',
    desc: 'Piscina ampla, integrada à área de lazer com espreguiçadeiras, guarda-sóis e uma vista privilegiada.',
  },
  {
    // A cliente vai enviar a foto do restaurante quando ele estiver pronto —
    // até lá o card segue com a foto do salão (story 1.9).
    img: '/fotos/salao-restaurante.webp',
    nome: 'Restaurante & quiosque',
    desc: 'Ambientes rústicos ao ar livre, sofisticados e integrados à natureza.',
  },
  {
    img: '/fotos/sala-jogos.webp',
    nome: 'Salão de jogos',
    desc: 'Diversos brinquedos para tornar a diversão e o entretenimento ainda mais incríveis: sinuca, pebolim, tênis de mesa e muito mais. Sofás para interação, com vista para a área externa e de lazer.',
  },
  {
    img: '/fotos/quadra-society.webp',
    nome: 'Quadra society',
    desc: 'Quadra coberta de grama sintética pra bola rolar a qualquer hora.',
  },
  {
    img: '/fotos/cabanas-lounge.webp',
    nome: 'Lounges & pergolados',
    desc: 'Cabanas e pergolados com sofás espalhados pelos jardins.',
  },
  {
    img: '/fotos/alameda-redes.webp',
    nome: 'Redários',
    desc: 'Alameda de redes entre os coqueiros pra tardes sem pressa.',
  },
  {
    // Foto enviada pela cliente (2026-07-29): ela pediu a banheira em si, não o
    // redário à noite com a hidro ao fundo.
    img: '/fotos/hidro-banheira.webp',
    nome: 'Hidromassagem',
    desc: 'Banheira de hidromassagem para tornar os seus momentos ainda mais relaxantes.',
  },
  {
    // Pendência declarada pela cliente: falta a foto do parquinho infantil.
    img: '/fotos/casinha-arvore.webp',
    nome: 'Casa na árvore',
    desc: 'Casa na árvore integrada a parquinho infantil, com vários brinquedos para a diversão das crianças.',
  },
  {
    // Renomeado a pedido da cliente (story 1.9): a foto é o pergolado com
    // poltronas, não o picadeiro. O haras tem a sua própria seção no site.
    img: '/fotos/haras-pergolado-cavalo.webp',
    nome: 'Praças de interação em meio à natureza',
    desc: 'Recantos com poltronas e sombra para conversar sem pressa, de frente para a área dos cavalos.',
  },
  {
    img: '/fotos/festa-deck-decorado.webp',
    nome: 'Espaço para eventos',
    desc: 'Ambientes amplos e pré-ornamentados, para receber o seu evento e celebração.',
  },
  {
    img: '/fotos/camping-deck.webp',
    nome: 'Acampamento',
    desc: 'Toda a estrutura disponível para você montar a sua barraca onde quiser e viver a melhor experiência de camping.',
  },
]

// Galerias de celebrações reais no espaço — fotos enviadas pela cliente.
// A última foto da lista fecha a galeria ocupando a linha inteira quando o total
// é ímpar — por isso a única paisagem do acervo vem por último.
export const CASAMENTO_FOTOS = [
  ['/fotos/casamento-noiva-veu.webp', 'Noiva diante da mesa de doces no salão ornamentado'],
  ['/fotos/casamento-casal-jardim.webp', 'Casal de noivos no banco do jardim entre as flores'],
  ['/fotos/casamento-buque.webp', 'Noiva jogando o buquê na festa à beira da piscina'],
  ['/fotos/casamento-casal-buque.webp', 'Casal sorrindo com o buquê no jardim da Rotieh'],
  ['/fotos/casamento-altar-entardecer.webp', 'Cerimônia no deck sob a árvore, com o céu alaranjado do fim de tarde'],
  ['/fotos/casamento-saida-petalas.webp', 'Noivos saindo entre os convidados sob uma chuva de pétalas'],
  ['/fotos/casamento-mesa-doces.webp', 'Casal abraçado diante da mesa de doces sob o arranjo suspenso de flores'],
]

export const FESTA_FOTOS = [
  ['/fotos/festa-pista-danca.webp', 'Pista de dança iluminada em festa de 15 anos'],
  ['/fotos/festa-corredor-fogos.webp', 'Debutante entrando entre fogos frios'],
  ['/fotos/festa-bolo.webp', 'Bolo de festa de quatro andares decorado com flores'],
  ['/fotos/festa-debutante.webp', 'Debutante na luz dourada do fim de tarde'],
]

export const MODALIDADES = [
  {
    id: 'quartos',
    titulo: 'Chalés Rotieh',
    chamada: 'Reserve um chalé',
    preco: 'R$ 350',
    sufixo: '/chalé',
    destaque: true,
    resumo:
      'Reserve um chalé e viva a Rotieh no seu ritmo: piscina, natureza e sossego, com diária de 24 horas.',
    itens: [
      'Diária de 24h — check-in no horário que você escolher',
      '10 chalés: cama de casal, TV, Wi-Fi, frigobar, ar e banheiro',
      'Acesso completo a piscina, áreas de lazer e natureza',
      'Casal com 1 criança pequena fica no mesmo chalé',
      'Reservando os 10 chalés: R$ 300 cada + espaço exclusivo',
    ],
    ideal: 'Descanso, férias, comemorações e escapadas da rotina',
  },
  {
    id: 'evento',
    titulo: 'Casamentos & Festas',
    chamada: 'O espaço inteiro, só seu',
    preco: 'R$ 2.000',
    sufixo: '/diária',
    resumo:
      'O espaço completo com exclusividade, feito para celebrar do seu jeito, do altar à festa.',
    itens: [
      'Casamentos, aniversários, 15 anos e formaturas',
      'Batizados, confraternizações e eventos corporativos',
      'Exclusividade total: nenhum outro grupo no espaço',
      'Diária das 8h às 17h — festa avançando a noite: + R$ 1.000',
      'Até 100 convidados (acima: R$ 20 por pessoa)',
      'Chalés pra noivos e convidados: R$ 150 cada · camping incluso na diária noturna',
    ],
    ideal: 'O seu grande dia com a paisagem mais bonita da região',
  },
  {
    id: 'locacao',
    titulo: 'Locação completa',
    chamada: 'Um dia inteiro de exclusividade',
    preco: 'R$ 2.000',
    sufixo: '/diária',
    resumo: 'O espaço inteiro para o seu grupo.',
    // Lista reescrita pela cliente (story 1.9). Atenção: o acampamento passou a
    // ser incluso apenas no valor da diária noturna — antes o site dizia
    // "camping incluso" sem condição.
    itens: [
      'Diária das 08h às 17h (R$ 2.000)',
      'Diária das 18h às 08h (R$ 1.000)',
      'Piscina, quadras, campo de futebol e tudo o que o nosso espaço oferece, só para o seu grupo',
      'Acampamento em barracas incluso no valor da diária noturna · chalés opcionais (R$ 150 cada por noite)',
      'Restaurante no local ou duas cozinhas à disposição para preparar os alimentos',
    ],
    ideal: 'Retiros, acampamentos, encontros de família e de empresas',
  },
  {
    id: 'camping',
    titulo: 'Camping avulso',
    chamada: 'Sob o céu aberto',
    preco: 'R$ 200',
    sufixo: '/barraca',
    resumo: 'A experiência de acampar com estrutura completa por perto.',
    itens: [
      'Até 3 pessoas por barraca',
      'Acesso à estrutura do espaço',
      'Na diária noturna da locação completa, o camping é incluso',
      'Restaurante e cozinhas de apoio',
    ],
    ideal: 'Quem quer natureza de verdade sem reservar tudo',
  },
]

export const ESTRUTURA = [
  {
    grupo: 'Lazer',
    itens: [
      'Piscina com área de convivência',
      'Bar molhado integrado à piscina',
      'Área gourmet com churrasqueira na piscina',
      'Salão de jogos',
      'Campo de futebol',
      'Quadras de areia: futevôlei, futebol e beach tennis',
      'Parquinho infantil',
      'Brinquedos adaptados para crianças autistas',
    ],
  },
  {
    grupo: 'Descanso',
    itens: [
      'Praças de descanso',
      'Redários',
      'Espaços de convivência em meio à natureza',
    ],
  },
  {
    grupo: 'Alimentação',
    itens: [
      'Restaurante próprio',
      'Duas cozinhas para preparo de alimentos',
      'Três áreas com churrasqueiras',
    ],
  },
  {
    grupo: 'Infraestrutura',
    itens: [
      '10 chalés para hospedagem',
      '18 banheiros pelo espaço',
      'Área destinada ao camping',
    ],
  },
]

export const OCASIOES = [
  'Férias e dias em família',
  'Confraternizações de amigos e empresas',
  'Casamentos e mini weddings',
  'Batizados',
  'Formaturas',
  'Eventos corporativos e reuniões de equipe',
  'Ensaios fotográficos e produções audiovisuais',
]

export const EXTRAS = [
  ['Passeio a cavalo', 'R$ 30 por pessoa'],
  ['Ensaio fotográfico externo', 'R$ 400'],
  ['Ensaio fotográfico interno', 'R$ 600'],
]

// Galeria de experiências reais (fotos do Instagram oficial)
export const EXPERIENCIAS = [
  {
    img: '/fotos/lazer-redario.webp',
    titulo: 'Noites no redário',
    desc: 'Rede, luz baixa e conversa boa depois de um dia de piscina.',
  },
  {
    img: '/fotos/camping-tendas.webp',
    titulo: 'Acampamento',
    desc: 'Barracas no gramado, céu aberto e amanhecer na natureza.',
  },
  {
    img: '/fotos/sala-jogos.webp',
    titulo: 'Salão de jogos',
    desc: 'Sinuca e pebolim pra família inteira, a qualquer hora.',
  },
  {
    img: '/fotos/lazer-pizzas.webp',
    titulo: 'Sabores da casa',
    desc: 'Do café da manhã ao açaí — restaurante dentro do espaço.',
  },
  {
    img: '/fotos/familia-almoco-piscina.webp',
    titulo: 'Dia em família',
    desc: 'Mesa farta na beira da piscina e criançada solta, com segurança.',
  },
  {
    img: '/fotos/lazer-bebidas.webp',
    titulo: 'Bar molhado',
    desc: 'Bebida gelada servida onde você está: dentro da água.',
  },
  {
    img: '/fotos/festa-pista-danca.webp',
    titulo: 'Festas inesquecíveis',
    desc: '15 anos, casamentos e formaturas com cenário de interior chique.',
  },
  {
    img: '/fotos/natureza-silhueta.webp',
    titulo: 'Pôr do sol dourado',
    desc: 'O fim de tarde que deu nome à cidade, todos os dias.',
  },
]

export const FAQ = [
  {
    q: 'Posso pagar só a entrada e passar o dia?',
    a: 'No momento não trabalhamos com entrada individual. O espaço funciona com reserva de chalés, locação completa ou camping avulso — assim cada grupo aproveita com tranquilidade e exclusividade.',
  },
  {
    q: 'Quais os dias e horários de funcionamento?',
    a: 'Funcionamos todos os dias, sem exceção — sempre com reserva antecipada. Na locação completa, a diária vai das 8h às 17h, com adicional noturno das 18h às 8h.',
  },
  {
    q: 'Como funciona o check-in dos chalés?',
    a: 'Você escolhe o horário de entrada e a diária vale 24 horas. Entrou às 15h, sai às 15h do dia seguinte — vale também para estadias mais longas.',
  },
  {
    q: 'A diária do chalé inclui café da manhã?',
    a: 'Não — a Rotieh não opera no formato tradicional de hotelaria. O restaurante do espaço serve café da manhã, almoço, jantar, lanches, sorvetes, açaís e bebidas, vendidos à parte.',
  },
  {
    q: 'Posso levar comida e bebida?',
    a: 'Pode! Quem reserva pode trazer alimentos e bebidas. Na locação completa, dá até pra trazer panelas e utensílios e usar nossas duas cozinhas. Só pedimos que avise a equipe com antecedência sobre a logística.',
  },
  {
    q: 'Quantas pessoas cabem na locação completa?',
    a: 'A estrutura comporta até 1.000 pessoas. A diária cobre até 100 — acima disso, o valor acompanha o tamanho do grupo (R$ 20 por pessoa adicional). É só alinhar com a equipe na hora da reserva.',
  },
  {
    q: 'Como funcionam os chalés na locação completa?',
    a: 'Os chalés são opcionais: R$ 150 por chalé durante a locação — perfeitos pra noivos, aniversariantes e pra quem quer viver a experiência de forma mais prolongada, ficando no espaço depois que a festa acaba. E quem preferir pode acampar em barracas, sem custo por barraca quando a reserva inclui a diária noturna.',
  },
  {
    q: 'Quanto custa cada modalidade?',
    a: 'Chalé: R$ 350 a diária de 24h (R$ 300 cada reservando os 10). Locação completa e eventos: R$ 2.000 a diária das 8h às 17h, com adicional noturno de R$ 1.000. Camping avulso: R$ 200 por barraca. Datas especiais e grupos grandes a equipe confirma no WhatsApp.',
  },
  {
    q: 'Tem algum serviço cobrado à parte?',
    a: 'Só o passeio a cavalo: R$ 30 por pessoa. Ensaios fotográficos têm valores próprios — R$ 400 (externo) e R$ 600 (ambientes internos).',
  },
]

// Distâncias rodoviárias verificadas no Google Maps (sede de América Dourada,
// 2026-07-17) — refinar quando o cliente mandar o pin exato da propriedade.
export const DISTANCIAS = [
  ['João Dourado', '± 29 km'],
  ['Cafarnaum', '± 37 km'],
  ['Lapão', '± 50 km'],
  ['Irecê', '± 52 km'],
  ['Central', '± 86 km'],
]

export const NAV = [
  ['Chalés', '#pousada'],
  ['Festas & Eventos', '#eventos'],
  ['Ambientes', '#ambientes'],
  ['Reservas', '#modalidades'],
  ['Haras', '#haras'],
  ['Contato', '#contato'],
]
