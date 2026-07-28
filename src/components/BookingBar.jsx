import { Sw, Oval } from './ui.jsx'

export default function BookingBar() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="font-display text-5xl text-teal">
          <Sw>R</Sw>
        </span>
        <p className="mt-6 max-w-2xl text-[11px] font-medium uppercase leading-[2.1] tracking-[0.22em] text-teal/70">
          No Rotieh você aluga um chalé e vive dias sem pressa: piscina,
          redários, natureza e todos os ambientes inclusos. E quando é dia de
          celebrar, o espaço inteiro recebe casamentos, aniversários e festas —
          funcionamos todos os dias, sempre com reserva antecipada.
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
