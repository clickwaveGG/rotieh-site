import { NAV, wa, INSTAGRAM } from '../data.js'
import { WaIcon } from './Header.jsx'

export default function Footer() {
  return (
    <footer className="mx-3 mb-3 rounded-[28px] bg-ink px-8 py-12 text-sand md:mx-4 md:mb-4 md:px-14 md:py-16">
      <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="block h-16 w-16 overflow-hidden rounded-full">
              <img
                src="/logo.png"
                alt="Rotieh — Hospedagem e Lazer"
                className="h-full w-full scale-[1.22] object-cover"
              />
            </span>
            <p className="text-2xl font-extrabold tracking-wide">Rotieh</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/60">
            Parque aquático, pousada e haras em América Dourada — BA.
            O oásis da região de Irecê.
          </p>
          <div className="mt-6">
            <p className="text-sm font-semibold">Receba avisos e promoções</p>
            <form
              className="mt-3 flex max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full rounded-full border border-sand/25 bg-transparent px-5 py-2.5 text-sm outline-none placeholder:text-sand/40 focus:border-sand/60"
              />
              <button className="rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <FooterCol
            title="O Complexo"
            links={[
              ['O Parque', '#parque'],
              ['Pousada', '#pousada'],
              ['Haras', '#haras'],
              ['Eventos', '#eventos'],
            ]}
          />
          <FooterCol
            title="Visite"
            links={[
              ['Day Use & Preços', '#dayuse'],
              ['Como chegar', '#contato'],
              ['Horários', '#dayuse'],
              ['Perguntas frequentes', '#contato'],
            ]}
          />
          <div>
            <p className="text-sm font-semibold">Contato</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={wa('Olá! Vim pelo site do Rotieh 👋')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-sand/25 px-4 py-2 text-sm font-medium transition hover:bg-sand/10"
              >
                <WaIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-sand/25 px-4 py-2 text-sm font-medium transition hover:bg-sand/10"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sand/15 pt-6 text-xs text-sand/50 sm:flex-row">
        <span>© 2026 Rotieh · América Dourada, BA</span>
        <span>Aberto sábados, domingos e feriados · 9h às 17h</span>
        <a
          href="/gestao"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition hover:bg-gold hover:text-ink-2"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          Área da gerente · demo
        </a>
        <span>Protótipo — Clickwave</span>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm text-sand/60 transition hover:text-sand">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
