import { Sw, Oval } from './ui.jsx'

export default function BookingBar() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="font-display text-5xl text-bark">
          <Sw>R</Sw>
        </span>
        <p className="mt-6 max-w-2xl text-[11px] font-medium uppercase leading-[2.1] tracking-[0.22em] text-bark/70">
          O Rotieh é mais do que um espaço: é um destino pra quem quer
          desacelerar, celebrar conquistas e criar memórias que ficam.
          Funcionamos todos os dias, sempre com reserva antecipada — cada
          grupo vive o lugar com conforto, privacidade e liberdade.
        </p>
        <span aria-hidden className="mt-10 block h-16 w-px bg-bark/25" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Oval href="#modalidades">Ver modalidades</Oval>
          <Oval href="#reserva" solid>
            Montar minha reserva
          </Oval>
        </div>
      </div>
    </section>
  )
}
