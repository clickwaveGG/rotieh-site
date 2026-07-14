import { useState } from 'react'
import { carregar, salvar, resetarDemo } from './store.js'
import Agenda from './Agenda.jsx'
import Reservas from './Reservas.jsx'
import Clientes from './Clientes.jsx'

const ABAS = [
  ['agenda', 'Agenda', IconCal],
  ['reservas', 'Reservas', IconTicket],
  ['clientes', 'Clientes', IconUsers],
]

export default function Gestao() {
  const [dados, setDados] = useState(carregar)
  const [aba, setAba] = useState('agenda')

  const atualizar = (novo) => {
    setDados(novo)
    salvar(novo)
  }

  return (
    <div className="min-h-screen bg-sand pb-24 md:pb-10">
      {/* topo */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Rotieh" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <h1 className="text-base font-bold leading-tight text-ink">Gestão Rotieh</h1>
              <p className="text-[11px] font-medium text-ink/50">Painel da gerente · demonstração</p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 rounded-full bg-white p-1 shadow-sm md:flex">
            {ABAS.map(([id, label, Icon]) => (
              <button
                key={id}
                onClick={() => setAba(id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                  aba === id ? 'bg-ink text-sand' : 'text-ink/60 hover:text-ink'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { if (confirm('Restaurar os dados de demonstração?')) setDados(resetarDemo()) }}
              className="hidden rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink/60 transition hover:bg-white md:block"
              title="Volta os dados de exemplo ao estado inicial"
            >
              Resetar demo
            </button>
            <a href="/" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition hover:bg-sand-2">
              ← Voltar ao site
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-6 md:px-6">
        {aba === 'agenda' && <Agenda dados={dados} irPara={setAba} />}
        {aba === 'reservas' && <Reservas dados={dados} atualizar={atualizar} />}
        {aba === 'clientes' && <Clientes dados={dados} atualizar={atualizar} />}
      </main>

      {/* abas fixas no mobile */}
      <nav className="fixed inset-x-3 bottom-3 z-40 flex rounded-full bg-ink p-1.5 shadow-2xl md:hidden">
        {ABAS.map(([id, label, Icon]) => (
          <button
            key={id}
            onClick={() => setAba(id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition ${
              aba === id ? 'bg-sand text-ink' : 'text-sand/60'
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function IconCal({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4m8-4v4M3 10h18" />
    </svg>
  )
}
function IconTicket({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" /><path d="M13 6v2m0 3v2m0 3v2" />
    </svg>
  )
}
function IconUsers({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 5a3.5 3.5 0 0 1 0 7m5.5 8a6.5 6.5 0 0 0-4.5-6.2" />
    </svg>
  )
}
