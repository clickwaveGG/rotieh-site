import { useState } from 'react'
import { NAV, wa } from '../data.js'

const pill =
  'rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/30'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* aba branca central com o logo, cortando o hero (estilo Wanderlust) */}
      <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 rounded-b-3xl bg-sand px-8 pb-4 pt-4 md:px-12">
        <a href="#" className="block h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
          <img
            src="/logo.png"
            alt="Rotieh — Hospedagem e Lazer"
            className="h-full w-full scale-[1.22] object-cover"
          />
        </a>
      </div>

      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-4 md:px-7 md:py-6">
        <nav className="hidden items-center gap-2 lg:flex">
          {NAV.slice(0, 4).map(([label, href]) => (
            <a key={href} href={href} className={pill}>
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a href={wa('Olá! Vim pelo site do Rotieh 👋')} target="_blank" rel="noreferrer" className={`${pill} hidden md:inline-flex items-center gap-2`}>
            <WaIcon className="h-4 w-4" />
            Fale conosco
          </a>
          <a href="#pousada" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:bg-sand md:inline-block">
            Reservar
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-md lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="absolute inset-x-4 top-20 z-40 rounded-3xl bg-white p-6 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-semibold text-ink transition hover:bg-sand"
              >
                {label}
              </a>
            ))}
            <a
              href={wa('Olá! Vim pelo site do Rotieh 👋')}
              target="_blank"
              rel="noreferrer"
              className="mt-3 rounded-full bg-aqua px-4 py-3 text-center font-semibold text-white"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

export function WaIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.1-1.7 1.2-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .7-.2 1.2Z" />
    </svg>
  )
}
