import { wa } from '../data.js'
import { WaIcon } from './Header.jsx'

export default function WhatsFloat() {
  return (
    <a
      href={wa('Olá! Vim pelo site do Rotieh 👋')}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-110"
    >
      <WaIcon className="h-7 w-7" />
    </a>
  )
}
