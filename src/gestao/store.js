// Painel de Gestão Rotieh — MVP de demonstração.
// Dados ficam no navegador (localStorage). Sem servidor: é uma demo funcional
// pra apresentação ao cliente; a versão final pluga num backend real.

const KEY = 'rotieh-gestao-v1'

export const CHALES = ['Chalé Rotieh 1', 'Chalé Rotieh 2', 'Suíte Casal', 'Suíte Romântica']
export const TIPOS = ['Day Use', 'Pousada', 'Evento']
export const STATUS = ['pendente', 'confirmada', 'check-in', 'concluída', 'cancelada']
export const TAGS = ['Day Use', 'Pousada', 'Eventos', 'VIP', 'Grupo/Excursão', 'Aniversariante']

export const brl = (n) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

export const dataBR = (iso) => {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y.slice(2)}`
}

export const hojeISO = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const uid = () => Math.random().toString(36).slice(2, 9)

// ── Seed de demonstração ────────────────────────────────────────────────────

const seedClientes = () => [
  {
    id: uid(), nome: 'Maria José Souza', telefone: '74 99811-2233', cidade: 'Irecê',
    tags: ['Pousada', 'VIP'], notas: 'Prefere a Suíte Romântica. Aniversário de casamento em setembro.',
    visitas: [
      { data: '2026-02-14', tipo: 'Pousada', detalhe: 'Suíte Romântica', noites: 2, pessoas: 2, gasto: 980 },
      { data: '2026-04-18', tipo: 'Day Use', detalhe: '', noites: 0, pessoas: 4, gasto: 320 },
      { data: '2026-06-12', tipo: 'Pousada', detalhe: 'Suíte Romântica', noites: 1, pessoas: 2, gasto: 540 },
    ],
  },
  {
    id: uid(), nome: 'Carlos Menezes', telefone: '74 99902-4455', cidade: 'João Dourado',
    tags: ['Day Use', 'Grupo/Excursão'], notas: 'Organiza excursão da igreja. Sempre negocia pacote de grupo.',
    visitas: [
      { data: '2026-01-25', tipo: 'Day Use', detalhe: 'Grupo 38 pessoas', noites: 0, pessoas: 38, gasto: 1140 },
      { data: '2026-05-03', tipo: 'Day Use', detalhe: 'Grupo 45 pessoas', noites: 0, pessoas: 45, gasto: 1350 },
    ],
  },
  {
    id: uid(), nome: 'Fernanda Lima', telefone: '74 99123-7788', cidade: 'Central',
    tags: ['Pousada'], notas: '',
    visitas: [
      { data: '2026-03-08', tipo: 'Pousada', detalhe: 'Chalé Rotieh 1', noites: 2, pessoas: 4, gasto: 1120 },
    ],
  },
  {
    id: uid(), nome: 'Roberto Dourado', telefone: '74 99870-1122', cidade: 'Irecê',
    tags: ['Eventos', 'VIP'], notas: 'Fez a festa de 15 anos da filha em fev/26. Tem outra filha de 13.',
    visitas: [
      { data: '2026-02-21', tipo: 'Evento', detalhe: '15 anos — 180 convidados', noites: 0, pessoas: 180, gasto: 14500 },
    ],
  },
  {
    id: uid(), nome: 'Ana Paula Ferreira', telefone: '74 99655-3344', cidade: 'Lapão',
    tags: ['Day Use', 'Aniversariante'], notas: 'Aniversário em julho — sempre comemora no parque.',
    visitas: [
      { data: '2025-07-20', tipo: 'Day Use', detalhe: 'Aniversário', noites: 0, pessoas: 12, gasto: 640 },
      { data: '2026-07-05', tipo: 'Day Use', detalhe: '', noites: 0, pessoas: 6, gasto: 380 },
    ],
  },
  {
    id: uid(), nome: 'Junior Almeida', telefone: '74 99444-8899', cidade: 'Cafarnaum',
    tags: ['Day Use'], notas: '',
    visitas: [
      { data: '2026-01-11', tipo: 'Day Use', detalhe: '', noites: 0, pessoas: 5, gasto: 310 },
    ],
  },
  {
    id: uid(), nome: 'Luciana Rocha', telefone: '74 99233-5566', cidade: 'Irecê',
    tags: ['Pousada', 'VIP'], notas: 'Casal médico. Gosta de sossego, pediu chalé longe da piscina.',
    visitas: [
      { data: '2025-12-30', tipo: 'Pousada', detalhe: 'Chalé Rotieh 2', noites: 3, pessoas: 2, gasto: 1740 },
      { data: '2026-04-21', tipo: 'Pousada', detalhe: 'Chalé Rotieh 2', noites: 2, pessoas: 2, gasto: 1160 },
    ],
  },
  {
    id: uid(), nome: 'Edvaldo Santana', telefone: '74 99760-2211', cidade: 'América Dourada',
    tags: ['Day Use'], notas: 'Mora perto, vem com os netos.',
    visitas: [
      { data: '2026-05-31', tipo: 'Day Use', detalhe: '', noites: 0, pessoas: 7, gasto: 350 },
      { data: '2026-06-28', tipo: 'Day Use', detalhe: '', noites: 0, pessoas: 9, gasto: 460 },
    ],
  },
  {
    id: uid(), nome: 'Patrícia Gomes', telefone: '74 99588-6677', cidade: 'Barro Alto',
    tags: ['Eventos'], notas: 'Cerimonialista — indica o espaço pra casamentos.',
    visitas: [
      { data: '2026-03-14', tipo: 'Evento', detalhe: 'Casamento — 220 convidados', noites: 0, pessoas: 220, gasto: 18900 },
    ],
  },
  {
    id: uid(), nome: 'Tiago Barbosa', telefone: '74 99310-9900', cidade: 'Irecê',
    tags: ['Pousada'], notas: '',
    visitas: [
      { data: '2026-06-20', tipo: 'Pousada', detalhe: 'Suíte Casal', noites: 1, pessoas: 2, gasto: 420 },
    ],
  },
]

const seedReservas = () => [
  // hoje (14/07, terça — dia tranquilo)
  { id: uid(), cliente: 'Luciana Rocha', telefone: '74 99233-5566', tipo: 'Pousada', chale: 'Chalé Rotieh 2', checkin: '2026-07-13', checkout: '2026-07-16', pessoas: 2, valor: 1740, status: 'check-in', obs: 'Pediu café na varanda.' },
  { id: uid(), cliente: 'Grupo Escola Municipal Lapão', telefone: '74 99655-1010', tipo: 'Day Use', chale: '', checkin: '2026-07-14', checkout: '', pessoas: 25, valor: 500, status: 'confirmada', obs: 'Excursão escolar, chegada 9h30.' },
  // semana
  { id: uid(), cliente: 'Tiago Barbosa', telefone: '74 99310-9900', tipo: 'Pousada', chale: 'Suíte Casal', checkin: '2026-07-16', checkout: '2026-07-18', pessoas: 2, valor: 840, status: 'confirmada', obs: '' },
  { id: uid(), cliente: 'Ana Paula Ferreira', telefone: '74 99655-3344', tipo: 'Day Use', chale: '', checkin: '2026-07-17', checkout: '', pessoas: 10, valor: 560, status: 'pendente', obs: 'Aniversário dela — ver bolo com a cozinha.' },
  // fim de semana 18-19 (cheio)
  { id: uid(), cliente: 'Carlos Menezes', telefone: '74 99902-4455', tipo: 'Day Use', chale: '', checkin: '2026-07-18', checkout: '', pessoas: 52, valor: 1560, status: 'confirmada', obs: 'Excursão João Dourado, 1 ônibus.' },
  { id: uid(), cliente: 'Maria José Souza', telefone: '74 99811-2233', tipo: 'Pousada', chale: 'Suíte Romântica', checkin: '2026-07-18', checkout: '2026-07-19', pessoas: 2, valor: 540, status: 'confirmada', obs: 'Decoração romântica — confirmar flores.' },
  { id: uid(), cliente: 'Família Andrade', telefone: '74 99101-2020', tipo: 'Day Use', chale: '', checkin: '2026-07-18', checkout: '', pessoas: 14, valor: 700, status: 'confirmada', obs: '' },
  { id: uid(), cliente: 'Fernanda Lima', telefone: '74 99123-7788', tipo: 'Pousada', chale: 'Chalé Rotieh 1', checkin: '2026-07-18', checkout: '2026-07-20', pessoas: 4, valor: 1120, status: 'pendente', obs: 'Aguardando sinal de 30%.' },
  { id: uid(), cliente: 'Turma do Vôlei Irecê', telefone: '74 99444-3030', tipo: 'Day Use', chale: '', checkin: '2026-07-19', checkout: '', pessoas: 22, valor: 880, status: 'confirmada', obs: '' },
  { id: uid(), cliente: 'Edvaldo Santana', telefone: '74 99760-2211', tipo: 'Day Use', chale: '', checkin: '2026-07-19', checkout: '', pessoas: 8, valor: 400, status: 'confirmada', obs: '' },
  // semana seguinte
  { id: uid(), cliente: 'Junior Almeida', telefone: '74 99444-8899', tipo: 'Day Use', chale: '', checkin: '2026-07-22', checkout: '', pessoas: 6, valor: 340, status: 'pendente', obs: '' },
  // sábado 25 (evento grande + parque)
  { id: uid(), cliente: 'Roberto Dourado', telefone: '74 99870-1122', tipo: 'Evento', chale: 'Salão de eventos', checkin: '2026-07-25', checkout: '', pessoas: 150, valor: 12800, status: 'confirmada', obs: '15 anos da Lívia — buffet fechado, som até 2h.' },
  { id: uid(), cliente: 'Grupo Igreja Central', telefone: '74 99233-4040', tipo: 'Day Use', chale: '', checkin: '2026-07-25', checkout: '', pessoas: 40, valor: 1200, status: 'confirmada', obs: '' },
  { id: uid(), cliente: 'Patrícia Gomes', telefone: '74 99588-6677', tipo: 'Evento', chale: 'Salão de eventos', checkin: '2026-08-08', checkout: '', pessoas: 200, valor: 17500, status: 'pendente', obs: 'Casamento — visita técnica dia 20/07.' },
]

// ── Persistência ────────────────────────────────────────────────────────────

export function carregar() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* seed abaixo */ }
  const dados = { clientes: seedClientes(), reservas: seedReservas() }
  localStorage.setItem(KEY, JSON.stringify(dados))
  return dados
}

export function salvar(dados) {
  localStorage.setItem(KEY, JSON.stringify(dados))
}

export function resetarDemo() {
  localStorage.removeItem(KEY)
  return carregar()
}

export function novaReserva(campos) {
  return { id: uid(), status: 'pendente', obs: '', chale: '', checkout: '', ...campos }
}

export function novoCliente(campos) {
  return { id: uid(), tags: [], notas: '', visitas: [], ...campos }
}

// ── Derivados ───────────────────────────────────────────────────────────────

export const totalGasto = (c) => c.visitas.reduce((s, v) => s + (v.gasto || 0), 0)

export const ultimaVisita = (c) =>
  c.visitas.length ? [...c.visitas].sort((a, b) => b.data.localeCompare(a.data))[0] : null

export const diasSemVir = (c) => {
  const u = ultimaVisita(c)
  if (!u) return null
  return Math.floor((new Date(hojeISO()) - new Date(u.data)) / 86400000)
}

// pessoas previstas por dia (reservas ativas)
export function pessoasNoDia(reservas, iso) {
  return reservas.reduce((s, r) => {
    if (r.status === 'cancelada') return s
    const dentro = r.checkout
      ? iso >= r.checkin && iso < r.checkout
      : iso === r.checkin
    return dentro ? s + (Number(r.pessoas) || 0) : s
  }, 0)
}

export function nivelDoDia(pessoas) {
  if (pessoas === 0) return { label: 'Livre', cor: 'bg-ink/5 text-ink/40' }
  if (pessoas <= 30) return { label: 'Tranquilo', cor: 'bg-aqua/15 text-aqua-deep' }
  if (pessoas <= 90) return { label: 'Movimentado', cor: 'bg-gold/25 text-gold-deep' }
  return { label: 'Lotado', cor: 'bg-terra/20 text-terra' }
}
