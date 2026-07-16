import { useState } from 'react'
import { NAV, wa } from '../data.js'
import { Sw } from './ui.jsx'

const link =
  'text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 transition hover:text-white'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center px-5 py-5 md:px-10 md:py-7">
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.slice(0, 4).map(([label, href]) => (
            <a key={href} href={href} className={link}>
              {label}
            </a>
          ))}
        </nav>
        <span className="lg:hidden" />

        <a href="#" className="justify-self-center text-center text-white">
          <span className="block font-display text-2xl uppercase tracking-[0.18em] md:text-3xl">
            R<Sw>o</Sw>tieh
          </span>
          <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.4em] text-white/70">
            Parque · Pousada · Haras
          </span>
        </a>

        <div className="flex items-center justify-self-end">
          <a
            href={wa('Olá! Quero reservar no Rotieh 👋')}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-3 rounded-full border border-white/50 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-bark lg:inline-flex"
          >
            Reservar
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 12h18m-7-7 7 7-7 7" />
            </svg>
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* menu mobile editorial em tela cheia */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl uppercase tracking-[0.18em] text-bark">
              R<Sw>o</Sw>tieh
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-11 w-11 items-center justify-center text-bark"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-col divide-y divide-bark/10 border-y border-bark/10">
            {NAV.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5"
              >
                <span className="font-display text-3xl text-bark">{label}</span>
                <span className="font-display text-sm italic text-bark/50">(&thinsp;{String(i + 1).padStart(2, '0')}&thinsp;)</span>
              </a>
            ))}
          </nav>

          <a
            href={wa('Olá! Quero reservar no Rotieh 👋')}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-3 rounded-full bg-bark px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream"
          >
            Reservar no WhatsApp
          </a>
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
