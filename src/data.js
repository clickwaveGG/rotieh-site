// ⚠️ Contatos ainda de protótipo — WhatsApp e @ do Instagram a confirmar.
// Valores e regras atualizados com as informações oficiais do cliente (2026-07-16).

export const WHATSAPP = '5574999999999' // TODO: número real do Rotieh
export const INSTAGRAM = 'https://instagram.com/' // TODO: @ real do Rotieh

export const wa = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

// Fotos reais do empreendimento (acervo do Instagram oficial)
export const IMG = {
  hero: '/fotos/hero-desktop.webp',
  heroMobile: '/fotos/hero-mobile.webp',
  heroPoster: '/fotos/piscina-principal.webp',
  parqueA: '/fotos/piscina-panorama.webp',
  parqueB: '/fotos/dayuse-inflaveis.webp',
  haras: '/fotos/haras-cavalo-por-do-sol.webp',
  harasAlt: '/fotos/haras-cavalo-passeio.webp',
  restaurante: '/fotos/lazer-pizzas.webp',
  eventos: '/fotos/eventos-casamento.webp',
  instaCta: '/fotos/natureza-por-do-sol.webp',
  instaCard: '/fotos/dayuse-mae-filha.webp',
}

// 10 quartos padronizados. Diária = 24h a partir do check-in escolhido.
export const QUARTO = {
  preco: 'R$ 350',
  precoGrupo: 'R$ 300',
  total: 10,
  capacidade: 'Até 2 pessoas',
  excecao: 'Casal com 1 criança pequena pode ficar no mesmo quarto',
  estrutura: ['Cama de casal', 'TV', 'Wi-Fi', 'Frigobar', 'Ar-condicionado', 'Banheiro privativo'],
  fotos: [
    '/fotos/pousada-quarto-casal.webp',
    '/fotos/pousada-chale-exterior.webp',
    '/fotos/pousada-quarto-tv.webp',
    '/fotos/pousada-suite-romantica.webp',
    '/fotos/pousada-chale-varanda.webp',
  ],
}

export const MODALIDADES = [
  {
    id: 'eventos',
    titulo: 'Casamentos & Eventos',
    preco: 'R$ 2.000',
    sufixo: '/diária',
    destaque: true,
    resumo: 'O espaço inteiro vestido pra celebrar — do altar à festa.',
    itens: [
      'Casamentos, mini weddings, batizados e formaturas',
      'Confraternizações e eventos corporativos',
      'Exclusividade total: diária das 8h às 17h',
      'Festa avançando a noite: adicional de R$ 1.000',
      'Até 100 pessoas (acima: R$ 20 por pessoa)',
      'Quartos para noivos e convidados: R$ 150 cada',
    ],
    ideal: 'O seu grande dia com a paisagem mais bonita da região',
    nota: 'Reserva pela modalidade de locação completa do espaço',
  },
  {
    id: 'locacao',
    titulo: 'Locação completa',
    preco: 'R$ 2.000',
    sufixo: '/diária',
    resumo: 'O espaço inteiro, com exclusividade, pra até 100 pessoas.',
    itens: [
      'Diária das 8h às 17h',
      'Adicional noturno (18h às 8h): R$ 1.000',
      'Acima de 100 pessoas: R$ 20 por pessoa',
      'Quartos opcionais: R$ 150 por quarto',
      'Camping em barracas incluso',
      'Restaurante no local ou cozinhas à disposição',
    ],
    ideal: 'Eventos, confraternizações, retiros, acampamentos e encontros de família',
  },
  {
    id: 'quartos',
    titulo: 'Reserva de quartos',
    preco: 'R$ 350',
    sufixo: '/quarto',
    resumo: 'Hospedagem com acesso completo a toda a estrutura.',
    itens: [
      'Diária de 24h — check-in no seu horário',
      '10 quartos: casal, TV, Wi-Fi, frigobar, ar e banheiro',
      'Fechando os 10 quartos: R$ 300 cada + espaço exclusivo',
      'Até 2 pessoas por quarto (casal + criança pequena ok)',
      'Restaurante no local (refeições à parte)',
    ],
    ideal: 'Casais, famílias pequenas e grupos de amigos',
  },
  {
    id: 'camping',
    titulo: 'Camping avulso',
    preco: 'R$ 200',
    sufixo: '/barraca',
    resumo: 'A experiência de acampar sob o céu do sertão.',
    itens: [
      'Até 3 pessoas por barraca',
      'Acesso à estrutura do espaço',
      'Na locação completa, o camping é incluso',
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
      '10 quartos para hospedagem',
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
    desc: 'Barracas no gramado, céu do sertão e amanhecer na natureza.',
  },
  {
    img: '/fotos/lazer-sinuca.webp',
    titulo: 'Salão de jogos',
    desc: 'Sinuca e pebolim pra família inteira, a qualquer hora.',
  },
  {
    img: '/fotos/lazer-pizzas.webp',
    titulo: 'Sabores da casa',
    desc: 'Do café da manhã ao açaí — restaurante dentro do espaço.',
  },
  {
    img: '/fotos/dayuse-familia.webp',
    titulo: 'Dia em família',
    desc: 'Mesa na beira da piscina e criançada solta, com segurança.',
  },
  {
    img: '/fotos/lazer-bebidas.webp',
    titulo: 'Bar molhado',
    desc: 'Bebida gelada servida onde você está: dentro da água.',
  },
  {
    img: '/fotos/eventos-debutante.webp',
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
    a: 'No momento não trabalhamos com entrada individual. O espaço funciona com reserva de quartos, locação completa ou camping avulso — assim cada grupo aproveita com tranquilidade e exclusividade.',
  },
  {
    q: 'Quais os dias e horários de funcionamento?',
    a: 'Funcionamos todos os dias, sem exceção — sempre com reserva antecipada. Na locação completa, a diária vai das 8h às 17h, com adicional noturno das 18h às 8h.',
  },
  {
    q: 'Como funciona o check-in dos quartos?',
    a: 'Você escolhe o horário de entrada e a diária vale 24 horas. Entrou às 15h, sai às 15h do dia seguinte — vale também para estadias mais longas.',
  },
  {
    q: 'A diária do quarto inclui café da manhã?',
    a: 'Não — o Rotieh não opera no formato tradicional de hotelaria. O restaurante do espaço serve café da manhã, almoço, jantar, lanches, sorvetes, açaís e bebidas, vendidos à parte.',
  },
  {
    q: 'Posso levar comida e bebida?',
    a: 'Pode! Quem reserva pode trazer alimentos e bebidas. Na locação completa, dá até pra trazer panelas e utensílios e usar nossas duas cozinhas. Só pedimos que avise a equipe com antecedência sobre a logística.',
  },
  {
    q: 'Quantas pessoas cabem na locação completa?',
    a: 'A diária cobre até 100 pessoas. Passando disso, é cobrado R$ 20 por pessoa adicional.',
  },
  {
    q: 'Como funcionam os quartos na locação completa?',
    a: 'Os quartos são opcionais: R$ 150 por quarto durante a locação. E quem preferir pode acampar em barracas, sem custo por barraca.',
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
  ['O Espaço', '#parque'],
  ['Reservas', '#modalidades'],
  ['Pousada', '#pousada'],
  ['Haras', '#haras'],
  ['Eventos', '#eventos'],
  ['Contato', '#contato'],
]
