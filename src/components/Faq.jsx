import { FAQ } from '../data.js'

export default function Faq() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 md:pb-24">
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Perguntas que todo mundo faz
      </h2>
      <p className="mt-2 text-sm text-ink/60">
        Antes de mandar mensagem, dá uma olhada — a resposta provavelmente já está aqui.
      </p>

      <div className="mt-8 divide-y divide-ink/10 rounded-[28px] border border-ink/10 bg-white px-7">
        {FAQ.map(({ q, a }) => (
          <details key={q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink md:text-base">
              {q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 transition group-open:rotate-45 group-open:bg-ink group-open:text-sand">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 pr-12 text-sm leading-relaxed text-ink/70">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
