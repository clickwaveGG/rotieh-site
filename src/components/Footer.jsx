import { NAV, wa, INSTAGRAM } from '../data.js'
import { Sw } from './ui.jsx'

export default function Footer() {
  return (
    <footer className="bg-bark-2 px-6 pb-10 pt-16 text-cream md:px-12 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-cream/15 pb-14 md:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">
              Parque aquático, pousada e haras em América Dourada — BA.
              O oásis da região de Irecê.
            </p>
            <form className="mt-8 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <label className="block border-b border-cream/30 pb-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/60">
                  Receba avisos e promoções
                </span>
                <div className="flex items-center gap-3">
                  <input
                    type="email"
                    placeholder="seu e-mail"
                    className="w-full bg-transparent py-2.5 text-sm text-cream outline-none placeholder:text-cream/35"
                  />
                  <button aria-label="Enviar" className="text-cream/80 transition hover:text-cream">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M3 12h18m-7-7 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </label>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
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
                ['Experiências', '#experiencias'],
                ['Como chegar', '#contato'],
              ]}
            />
            <FooterCol
              title="Contato"
              links={[
                ['WhatsApp', wa('Olá! Vim pelo site do Rotieh 👋')],
                ['Instagram', INSTAGRAM],
                ['Google Maps', 'https://maps.google.com/?q=América+Dourada+BA'],
              ]}
              external
            />
          </div>
        </div>

        {/* wordmark gigante (ref.: brand footer) */}
        <p className="select-none pt-12 text-center font-display text-[22vw] uppercase leading-[0.85] tracking-[0.02em] text-cream/90 md:text-[13rem]">
          R<Sw>o</Sw>tieh
        </p>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-cream/45 sm:flex-row">
          <span>© 2026 Rotieh · América Dourada, BA</span>
          <a
            href="/gestao"
            className="inline-flex items-center gap-2 font-semibold text-gold transition hover:text-cream"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            Área da gerente · demo
          </a>
          <span>Protótipo — Clickwave</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links, external }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/50">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="text-sm text-cream/75 transition hover:text-cream"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
