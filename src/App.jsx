import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BookingBar from './components/BookingBar.jsx'
import Pousada from './components/Pousada.jsx'
import Parque from './components/Parque.jsx'
import Precos from './components/Precos.jsx'
import GaleriaZoom from './components/GaleriaZoom.jsx'
import Haras from './components/Haras.jsx'
import Experiencias from './components/Experiencias.jsx'
import Eventos from './components/Eventos.jsx'
import Faq from './components/Faq.jsx'
import InstaCta from './components/InstaCta.jsx'
import ComoChegar from './components/ComoChegar.jsx'
import Footer from './components/Footer.jsx'
import WhatsFloat from './components/WhatsFloat.jsx'

export default function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <BookingBar />
      <Pousada />
      <Parque />
      <Precos />
      <GaleriaZoom />
      <Haras />
      <Experiencias />
      <Eventos />
      <Faq />
      <InstaCta />
      <ComoChegar />
      <Footer />
      <WhatsFloat />
    </div>
  )
}
