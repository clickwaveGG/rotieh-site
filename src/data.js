// ⚠️ DADOS DE PROTÓTIPO — preços, horários, distâncias e contatos são
// ilustrativos e devem ser confirmados no discovery com o cliente.

export const WHATSAPP = '5574999999999' // TODO: número real do Rotieh
export const INSTAGRAM = 'https://instagram.com/' // TODO: @ real do Rotieh

export const wa = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=2000&q=80',
  parqueA: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80',
  parqueB: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80',
  haras: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80',
  harasAlt: 'https://images.unsplash.com/photo-1450052590821-8bf91254a353?w=1200&q=80',
  restaurante: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
  eventos: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
  instaCta: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=2000&q=80',
  instaCard: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
}

export const QUARTOS = [
  {
    nome: 'Chalé Família',
    desc: 'Espaço de sobra pra família toda, com varanda voltada pro verde do haras. Madeira, conforto e o jeito acolhedor do interior — a poucos passos das piscinas.',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    capacidade: 'Até 5 pessoas',
    preco: 'R$ 380',
  },
  {
    nome: 'Suíte Casal',
    desc: 'Pra quem quer descansar de verdade: cama king, ar-condicionado e café da manhã regional incluso. Perfeita pra escapada de fim de semana.',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
    capacidade: 'Até 2 pessoas',
    preco: 'R$ 240',
  },
  {
    nome: 'Chalé Pôr do Sol',
    desc: 'O melhor fim de tarde do sertão, visto da sua varanda. Deck privativo, rede e o dourado da golden hour de América Dourada todos os dias.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
    capacidade: 'Até 4 pessoas',
    preco: 'R$ 320',
  },
]

export const ATRACOES = [
  'Piscina adulto',
  'Piscina kids',
  'Toboáguas',
  'Quiosques e bar molhado',
  'Restaurante regional',
  'Estacionamento gratuito',
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
