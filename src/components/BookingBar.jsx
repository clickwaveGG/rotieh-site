import { Sw, Oval } from './ui.jsx'

export default function BookingBar() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="font-display text-5xl text-bark">
          <Sw>R</Sw>
        </span>
        <p className="mt-6 max-w-2xl text-[11px] font-medium uppercase leading-[2.1] tracking-[0.22em] text-bark/70">
          O Rotieh nasceu pra receber as suas celebrações: casamentos,
          aniversários e festas com o espaço inteiro reservado pro seu grupo.
          E quando a vontade é só desacelerar, um chalé pra dois te espera —
          funcionamos todos os dias, sempre com reserva antecipada.
        </p>
        <span aria-hidden className="mt-10 block h-16 w-px bg-bark/25" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Oval href="#eventos" solid>
            Casamentos & Festas
          </Oval>
          <Oval href="#pousada">Chalé pra dois</Oval>
        </div>
      </div>
    </section>
  )
}
