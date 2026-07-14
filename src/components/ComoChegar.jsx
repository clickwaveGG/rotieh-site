import { DISTANCIAS } from '../data.js'

export default function ComoChegar() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <iframe
          title="Mapa — Rotieh, América Dourada BA"
          src="https://www.google.com/maps?q=Am%C3%A9rica+Dourada+BA&z=11&output=embed"
          className="h-80 w-full rounded-[28px] border-0 md:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div>
          <span className="text-sm font-semibold text-ink/50">[Como chegar]</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            No centro da região, perto de tudo
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Zona rural de América Dourada — BA, com acesso fácil pelas principais
            estradas da microrregião de Irecê. Vem de carro, moto ou excursão.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {DISTANCIAS.map(([cidade, dist]) => (
              <li key={cidade} className="rounded-full bg-sand-2 px-4 py-2 text-xs font-semibold text-ink/70">
                {cidade} <span className="text-ink/40">· {dist}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://maps.google.com/?q=América+Dourada+BA"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand transition hover:bg-ink-2"
          >
            Traçar rota no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
