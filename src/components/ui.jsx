// Primitivas do design editorial (ref. premium residences):
// labels entre parênteses, botões ovais, letras swash e molduras com cantoneiras.

/** Letra caligráfica mesclada no display serif — ex.: <Sw>O</Sw>ÁSIS */
export function Sw({ children }) {
  return <span className="font-swash font-normal">{children}</span>
}

/** Label de seção: ( TEXTO ) com parênteses elegantes */
export function Label({ children, tone = 'bark' }) {
  const tones = {
    bark: 'text-bark/60',
    cream: 'text-cream/70',
    gold: 'text-gold',
  }
  return (
    <span className={`inline-flex items-baseline gap-2 text-[11px] font-medium uppercase tracking-[0.3em] ${tones[tone]}`}>
      <span className="font-display text-lg leading-none">(</span>
      {children}
      <span className="font-display text-lg leading-none">)</span>
    </span>
  )
}

/** Botão oval com seta — ex.: RESERVAR → */
export function Oval({ href, children, dark, solid, target, onClick, className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-3 rounded-[50%_50%_50%_50%/100%_100%_100%_100%] rounded-full px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] transition'
  const look = solid
    ? 'bg-bark text-cream hover:bg-bark-2'
    : dark
      ? 'border border-cream/40 text-cream hover:bg-cream hover:text-bark'
      : 'border border-bark/40 text-bark hover:bg-bark hover:text-cream'
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={target ? 'noreferrer' : undefined}
      className={`${base} ${look} ${className}`}
    >
      {children}
      <Arrow className="h-3.5 w-3.5" />
    </a>
  )
}

export function Arrow({ className = 'h-4 w-4', flip }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} ${flip ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 12h18m-7-7 7 7-7 7" />
    </svg>
  )
}

/** Moldura com cantoneiras nos 4 cantos (fotos do carrossel da referência) */
export function Frame({ children, tone = 'bark', pad = 'p-3 md:p-4', className = '' }) {
  const line = tone === 'cream' ? 'border-cream/50' : 'border-bark/40'
  const corner = `absolute h-5 w-5 ${line}`
  return (
    <div className={`relative ${pad} ${className}`}>
      <span aria-hidden className={`${corner} left-0 top-0 border-l border-t`} />
      <span aria-hidden className={`${corner} right-0 top-0 border-r border-t`} />
      <span aria-hidden className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span aria-hidden className={`${corner} bottom-0 right-0 border-b border-r`} />
      {children}
    </div>
  )
}

/** Número editorial: ( 1 ) */
export function Num({ n, tone = 'bark' }) {
  return (
    <span className={`font-display text-base italic ${tone === 'cream' ? 'text-cream/70' : 'text-bark/60'}`}>
      (&thinsp;{n}&thinsp;)
    </span>
  )
}
