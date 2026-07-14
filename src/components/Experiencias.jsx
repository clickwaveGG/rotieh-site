import { EXPERIENCIAS, wa } from '../data.js'

export default function Experiencias() {
  return (
    <section id="experiencias" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[auto_1fr_1fr] md:gap-12">
        <span className="text-sm font-semibold text-ink/50">[Experiências]</span>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Um dia não dá pra viver tudo
        </h2>
        <div>
          <p className="text-sm leading-relaxed text-ink/70">
            Piscina é só o começo. Redário, acampamento, sala de jogos, comida boa e
            fim de tarde dourado — cada canto do Rotieh foi feito pra você ficar
            mais um pouco.
          </p>
          <a
            href={wa('Olá! Quero saber mais sobre as experiências do Rotieh ✨')}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand transition hover:bg-ink-2"
          >
            Planejar minha visita
          </a>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {EXPERIENCIAS.map((e) => (
          <figure
            key={e.titulo}
            className="group relative aspect-[3/4] overflow-hidden rounded-[22px] md:rounded-[28px]"
          >
            <img
              src={e.img}
              alt={e.titulo}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2/85 via-ink-2/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <h3 className="text-sm font-bold text-white md:text-base">{e.titulo}</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/75">{e.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
