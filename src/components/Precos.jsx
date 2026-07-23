import { MODALIDADES, selecionarModalidade } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

// Modalidades sem preços: cada produto apresenta o que é e o botão
// "Saber mais" leva ao pré-atendimento (#reserva) com a modalidade
// já selecionada — valores só na conversa do WhatsApp.

export default function Precos() {
  return (
    <section id="modalidades" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Label>Reservas</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-bark md:text-7xl">
            Quatro jeitos de
            <br />
            viver <Sw>o</Sw> Rotieh
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-bark/60">
          Das grandes festas à escapada a dois. Funcionamos todos os dias,
          sempre com reserva antecipada — cada grupo aproveita o espaço com
          exclusividade e tranquilidade.
        </p>
      </div>

      <div className="mt-14 grid border-t border-bark/15 md:grid-cols-2">
        {MODALIDADES.map((m, idx) => (
          <div
            key={m.id}
            className={`flex flex-col border-b border-bark/15 px-0 py-9 md:p-10 md:odd:border-r ${
              m.destaque ? 'md:bg-olive/10' : ''
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <Num n={idx + 1} />
              <span className="text-right text-[10px] font-semibold uppercase tracking-[0.3em] text-bark/50">
                {m.destaque ? 'Carro-chefe' : m.convite ? 'Você é bem-vindo' : m.chamada}
              </span>
            </div>
            <h3 className="mt-7 font-display text-4xl uppercase leading-[1.05] tracking-[0.02em] text-bark md:text-5xl">
              {m.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bark/70">{m.resumo}</p>
            <ul className="mt-6 flex-1 space-y-2.5 border-t border-bark/15 pt-5">
              {m.itens.map((item) => (
                <li key={item} className="text-[13px] leading-relaxed text-bark/70">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[10px] font-medium uppercase leading-[1.8] tracking-[0.2em] text-bark/45">
              Ideal para: {m.ideal}
            </p>
            <Oval
              href="#reserva"
              solid={m.destaque}
              className="mt-7 w-fit"
              onClick={() => selecionarModalidade(m.id)}
            >
              Saber mais
            </Oval>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-bark/40">
        Sem entrada individual — o espaço é sempre reservado · Valores direto com a
        equipe no WhatsApp
      </p>
    </section>
  )
}
