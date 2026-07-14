import { PRECOS, wa } from '../data.js'

export default function Precos() {
  return (
    <section id="dayuse" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">Day Use</h2>
        <p className="max-w-sm text-sm text-ink/60">
          Chegou, pagou, aproveitou. Sábados, domingos e feriados — das 9h às 17h.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PRECOS.map((p) => (
          <div
            key={p.titulo}
            className={`flex flex-col rounded-[28px] p-8 ${
              p.destaque ? 'bg-aqua text-white' : 'border border-ink/10 bg-white text-ink'
            }`}
          >
            <span className={`text-sm font-semibold ${p.destaque ? 'text-white/80' : 'text-ink/50'}`}>
              {p.titulo}
            </span>
            <p className="mt-2 text-4xl font-bold tracking-tight">
              {p.preco}
              <span className="text-base font-medium opacity-60">{p.sufixo}</span>
            </p>
            <ul className={`mt-6 space-y-2.5 text-sm ${p.destaque ? 'text-white/85' : 'text-ink/70'}`}>
              {p.itens.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.destaque ? 'text-white' : 'text-aqua'}`} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={wa(`Olá! Quero garantir meu Day Use no Rotieh (${p.titulo}) 🌊`)}
              target="_blank"
              rel="noreferrer"
              className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                p.destaque
                  ? 'bg-white text-aqua-deep hover:bg-sand'
                  : 'bg-ink text-sand hover:bg-ink-2'
              }`}
            >
              Garantir ingresso
            </a>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink/40">*Valores ilustrativos do protótipo — sujeitos a confirmação.</p>
    </section>
  )
}

function Check({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
