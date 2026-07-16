import { DISTANCIAS } from '../data.js'
import { Sw, Label, Frame, Oval } from './ui.jsx'

export default function ComoChegar() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Frame>
          <iframe
            title="Mapa — Rotieh, América Dourada BA"
            src="https://www.google.com/maps?q=Am%C3%A9rica+Dourada+BA&z=11&output=embed"
            className="h-80 w-full border-0 grayscale-[35%] sepia-[20%] md:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Frame>
        <div>
          <Label>Como chegar</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-6xl">
            No centro d<Sw>a</Sw>
            <br />
            regi<Sw>ã</Sw>o
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bark/70">
            Zona rural de América Dourada — BA, com acesso fácil pelas
            principais estradas da microrregião de Irecê. Vem de carro, moto ou
            excursão.
          </p>

          <dl className="mt-8 border-t border-bark/15">
            {DISTANCIAS.map(([cidade, dist]) => (
              <div key={cidade} className="flex items-baseline justify-between border-b border-bark/15 py-3.5">
                <dt className="text-[13px] font-medium uppercase tracking-[0.15em] text-bark">
                  {cidade}
                </dt>
                <dd className="font-display text-sm italic text-bark/60">{dist}</dd>
              </div>
            ))}
          </dl>

          <Oval
            href="https://maps.google.com/?q=América+Dourada+BA"
            target="_blank"
            className="mt-9"
          >
            Traçar rota
          </Oval>
        </div>
      </div>
    </section>
  )
}
