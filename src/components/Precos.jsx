import { MODALIDADES, selecionarModalidade } from '../data.js'
import { Sw, Label, Num, Oval } from './ui.jsx'

// Cada produto apresenta título, preço e condições. O botão leva ao
// pré-atendimento (#reserva) com a modalidade já selecionada — o visitante
// chega na conversa já sabendo o valor (Story 1.7).

export default function Precos() {
  return (
    <section id="modalidades" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Label>Reservas</Label>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.02] tracking-[0.03em] text-teal md:text-7xl">
            Quatro maneiras
            <br />
            de viver <Sw>a</Sw> Rotieh
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-teal/60">
          Da hospedagem nos chalés às grandes festas. Funcionamos todos os
          dias, sempre com reserva antecipada — cada grupo aproveita o espaço
          com exclusividade e tranquilidade.
        </p>
      </div>

      <div className="mt-14 grid border-t border-teal/15 md:grid-cols-2">
        {MODALIDADES.map((m, idx) => (
          <div
            key={m.id}
            className={`flex flex-col border-b border-teal/15 px-0 py-9 md:p-10 md:odd:border-r ${
              m.destaque ? 'md:bg-teal-soft/10' : ''
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <Num n={idx + 1} />
              {/* O rótulo é sempre a chamada do produto: "Carro-chefe" era
                  jargão interno e a cliente pediu um convite no lugar. */}
              <span className="text-right text-[10px] font-semibold uppercase tracking-[0.3em] text-teal/50">
                {m.chamada}
              </span>
            </div>
            <h3 className="mt-7 font-display text-4xl uppercase leading-[1.05] tracking-[0.02em] text-teal md:text-5xl">
              {m.titulo}
            </h3>
            <p className="mt-3 flex items-baseline gap-1.5 font-display text-3xl text-teal md:text-4xl">
              {m.preco}
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-teal/50">
                {m.sufixo}
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-teal/70">{m.resumo}</p>
            <ul className="mt-6 flex-1 space-y-2.5 border-t border-teal/15 pt-5">
              {m.itens.map((item) => (
                <li key={item} className="text-[13px] leading-relaxed text-teal/70">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[10px] font-medium uppercase leading-[1.8] tracking-[0.2em] text-teal/45">
              Ideal para: {m.ideal}
            </p>
            <Oval
              href="#reserva"
              solid={m.destaque}
              className="mt-7 w-fit"
              onClick={() => selecionarModalidade(m.id)}
            >
              Montar reserva
            </Oval>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-teal/40">
        Sem entrada individual — o espaço é sempre reservado · Datas especiais e
        grupos grandes, confirme com a equipe
      </p>
    </section>
  )
}
