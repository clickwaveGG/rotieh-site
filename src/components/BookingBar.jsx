import { Sw, Oval } from './ui.jsx'

export default function BookingBar() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="font-display text-5xl text-teal">
          <Sw>R</Sw>
        </span>
        {/* Texto institucional da cliente (story 1.9). Bem mais longo que o
            anterior: tracking e leading reduzidos pra não virar paredão em
            caixa alta, e a última frase ganha corpo normal pra respirar. */}
        <p className="mt-6 max-w-3xl text-[11px] font-medium uppercase leading-[1.95] tracking-[0.12em] text-teal/70">
          A Rotieh é um espaço pensado para lazer, eventos, diversão e descanso.
          Hospede-se em nossos chalés ou reserve toda a estrutura para celebrar
          ou passar o dia. Em qualquer modalidade, você tem acesso à estrutura
          completa da Rotieh: piscina, redários, salão de jogos, campo de
          futebol, quadra de areia para futevôlei e beach tennis, além de
          diversos ambientes de convivência e muito mais.
        </p>
        <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-teal/60">
          Para oferecer uma experiência exclusiva e bem planejada, todas as
          reservas são realizadas antecipadamente.
        </p>
        <span aria-hidden className="mt-10 block h-16 w-px bg-teal/25" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Oval href="#pousada" solid>
            Chalés
          </Oval>
          <Oval href="#eventos">Casamentos & Festas</Oval>
        </div>
      </div>
    </section>
  )
}
