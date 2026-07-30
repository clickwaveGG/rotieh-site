import { IMG, OCASIOES, CASAMENTO_FOTOS, FESTA_FOTOS, selecionarModalidade } from '../data.js'
import { Sw, Label, Num, Frame, Oval } from './ui.jsx'

// Carro-chefe do Rotieh: casamentos, aniversários e festas em geral.
// Preços públicos desde a Story 1.7 — a ficha abre com o valor da diária.

const FICHA = [
  ['Diária', 'R$ 2.000 — 8h às 17h'],
  ['Noite adicional', 'R$ 1.000 — 18h às 8h'],
  ['Capacidade', 'Até 100 convidados · + R$ 20 p/ pessoa'],
  ['Hospedagem', 'Chalés p/ noivos e convidados: R$ 150'],
]

export default function Eventos() {
  return (
    <section id="eventos" className="border-y border-teal/15 bg-cream-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <Label>Day use · Casamentos · Eventos · Celebrações</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-teal md:text-7xl">
            Feito pra <Sw>c</Sw>elebrar
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-teal/70">
            A Rotieh existe pra isso: o espaço inteiro, com exclusividade, para
            o seu casamento, aniversário, confraternização ou festa. Aqui,
            natureza, modernidade e sofisticação andam juntas — tudo isso com
            exclusividade para você e o seu grupo.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Frame>
              <img
                src={IMG.eventos}
                alt="Casamento celebrado no Rotieh"
                className="h-80 w-full object-cover md:h-[440px]"
                loading="lazy"
              />
            </Frame>

            {/* ficha do produto com os valores da locação */}
            <dl className="mt-8 border-t border-teal/15">
              {FICHA.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-teal/15 py-3.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal/55">
                    {k}
                  </dt>
                  {/* Corpo em Inter, não no display itálico: a cliente pediu
                      uma fonte mais legível nos valores (story 1.9). */}
                  <dd className="text-right text-sm font-medium text-teal">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-teal/45">
              Camping incluso na diária noturna · datas especiais a equipe
              confirma no WhatsApp
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal/50">
              O espaço recebe
            </p>
            <ul className="mt-4 border-t border-teal/15">
              {OCASIOES.map((o, idx) => (
                <li key={o} className="flex items-baseline gap-4 border-b border-teal/15 py-4">
                  <Num n={idx + 1} />
                  <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-teal/85">
                    {o}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Oval href="#reserva" solid onClick={() => selecionarModalidade('evento')}>
                Montar reserva
              </Oval>
              <Oval href="#modalidades">Ver todas as modalidades</Oval>
            </div>
          </div>
        </div>

        {/* Galerias reais — pedido da cliente: mostrar o espaço ornamentado
            e as festas que o Rotieh já recebeu */}
        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-16">
          {[
            ['Casamentos no Rotieh', 'O espaço ornamentado do altar à mesa de doces', CASAMENTO_FOTOS],
            ['Festas & 15 anos', 'Pista de dança, fogos frios e bolos de festa', FESTA_FOTOS],
          ].map(([titulo, sub, fotos]) => (
            <div key={titulo}>
              <div className="flex items-baseline justify-between gap-4 border-b border-teal/15 pb-4">
                <h3 className="font-display text-2xl uppercase tracking-[0.03em] text-teal md:text-3xl">
                  {titulo}
                </h3>
                <span className="hidden text-right text-[10px] font-medium uppercase tracking-[0.2em] text-teal/45 md:block">
                  {sub}
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {fotos.map(([src, alt]) => (
                  <div key={src} className="overflow-hidden">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="h-56 w-full object-cover transition duration-500 hover:scale-105 md:h-72"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
