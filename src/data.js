// ⚠️ DADOS DE PROTÓTIPO — preços, horários, distâncias e contatos são
// ilustrativos e devem ser confirmados no discovery com o cliente.

export const WHATSAPP = '5574999999999' // TODO: número real do Rotieh
export const INSTAGRAM = 'https://instagram.com/' // TODO: @ real do Rotieh

export const wa = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

// Fotos reais do empreendimento (acervo do Instagram oficial @rotieh.americadourada)
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

export const QUARTOS = [
  {
    nome: 'Chalé Rotieh',
    desc: 'Arquitetura moderna no meio do verde: chalé com varanda, conforto de hotel e o silêncio do interior. A poucos passos das piscinas e do haras.',
    img: '/fotos/pousada-chale-exterior.webp',
    thumb: '/fotos/pousada-chale-arquitetura.webp',
    capacidade: 'Até 4 pessoas',
    preco: 'R$ 380',
  },
  {
    nome: 'Suíte Casal',
    desc: 'Pra quem quer descansar de verdade: cama confortável, ar-condicionado, TV e café da manhã regional incluso. Perfeita pra escapada de fim de semana.',
    img: '/fotos/pousada-quarto-casal.webp',
    thumb: '/fotos/pousada-quarto-tv.webp',
    capacidade: 'Até 2 pessoas',
    preco: 'R$ 240',
  },
  {
    nome: 'Experiência Romântica',
    desc: 'Suíte com decoração especial pra datas que merecem capricho: pedidos, aniversários de namoro, lua de mel. A equipe prepara tudo antes de vocês chegarem.',
    img: '/fotos/pousada-suite-romantica.webp',
    thumb: '/fotos/pousada-chale-varanda.webp',
    capacidade: 'Casal',
    preco: 'Sob consulta',
  },
]

export const ATRACOES = [
  'Piscina adulto',
  'Piscina kids',
  'Brinquedos infláveis',
  'Sala de jogos',
  'Redário e lounge',
  'Restaurante regional',
  'Estacionamento gratuito',
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
    titulo: 'Sala de jogos',
    desc: 'Sinuca e pebolim pra família inteira, a qualquer hora.',
  },
  {
    img: '/fotos/lazer-pizzas.webp',
    titulo: 'Sabores da casa',
    desc: 'Pizzas, petiscos e pratos regionais sem sair do parque.',
  },
  {
    img: '/fotos/dayuse-familia.webp',
    titulo: 'Dia em família',
    desc: 'Mesa na beira da piscina e criançada solta, com segurança.',
  },
  {
    img: '/fotos/lazer-bebidas.webp',
    titulo: 'Bar na piscina',
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

export const PRECOS = [
  {
    titulo: 'Adulto',
    preco: 'R$ 40',
    sufixo: '/pessoa',
    itens: ['Acesso a todas as piscinas', 'Área de descanso e quiosques', 'Estacionamento incluso'],
  },
  {
    titulo: 'Criança (5 a 11)',
    preco: 'R$ 20',
    sufixo: '/pessoa',
    itens: ['Até 4 anos não paga', 'Piscina kids monitorada', 'Área de sombra pra família'],
    destaque: true,
  },
  {
    titulo: 'Grupos & Excursões',
    preco: 'Sob consulta',
    sufixo: '',
    itens: ['Pacote por pessoa', 'Escolas, igrejas e empresas', 'Atendimento dedicado'],
  },
]

export const FAQ = [
  {
    q: 'Pode levar comida e bebida?',
    a: 'Alimentos leves são permitidos em áreas específicas. Bebidas em vidro não entram — temos quiosques e restaurante com preços acessíveis dentro do parque.',
  },
  {
    q: 'Quais os dias e horários de funcionamento?',
    a: 'Sábados, domingos e feriados, das 9h às 17h. Em alta temporada e férias escolares, abrimos em dias extras — acompanhe os avisos aqui no site e no Instagram.',
  },
  {
    q: 'Criança paga entrada?',
    a: 'Crianças até 4 anos não pagam. De 5 a 11 anos pagam meia. A partir de 12 anos, valor inteiro.',
  },
  {
    q: 'Tem salva-vidas e equipe de segurança?',
    a: 'Sim. Todas as piscinas contam com equipe de salva-vidas durante todo o horário de funcionamento.',
  },
  {
    q: 'Aceita Pix e cartão?',
    a: 'Aceitamos Pix, cartão de débito e crédito, tanto na entrada quanto nos quiosques e restaurante.',
  },
  {
    q: 'A diária da pousada inclui o acesso ao parque?',
    a: 'Sim — hóspedes têm acesso livre ao parque aquático durante toda a estadia, além do café da manhã regional.',
  },
]

export const DISTANCIAS = [
  ['Irecê', '± 35 km'],
  ['João Dourado', '± 20 km'],
  ['Central', '± 30 km'],
  ['Lapão', '± 40 km'],
  ['Cafarnaum', '± 45 km'],
]

export const NAV = [
  ['O Parque', '#parque'],
  ['Day Use', '#dayuse'],
  ['Pousada', '#pousada'],
  ['Haras', '#haras'],
  ['Eventos', '#eventos'],
  ['Contato', '#contato'],
]
