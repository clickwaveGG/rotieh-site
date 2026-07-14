import { IMG, wa } from '../data.js'

export default function Haras() {
  return (
    <section id="haras" className="mx-3 rounded-[28px] bg-ink-2 px-6 py-16 md:mx-4 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <img src={IMG.haras} alt="Cavalo do Haras Rotieh" className="h-80 w-full rounded-[28px] object-cover md:h-[460px]" />
        <div>
          <span className="text-sm font-semibold text-gold">[Haras Rotieh]</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-sand md:text-4xl">
            Tudo começou com os cavalos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-sand/70">
            Antes do parque, o Rotieh já era haras — e essa é a nossa assinatura.
            Nenhum outro lazer da região oferece a vivência rural de verdade:
            cavalgada no sertão, contato com os animais e o pôr do sol dourado
            que deu nome à cidade.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Cavalgada ao pôr do sol',
              'Passeio de pônei para as crianças',
              'Vivência rural e fotos com os cavalos',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-sand/90">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={wa('Olá! Quero agendar uma experiência no Haras Rotieh 🐎')}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink-2 transition hover:bg-gold-deep hover:text-white"
          >
            Agendar experiência
          </a>
        </div>
      </div>
    </section>
  )
}
