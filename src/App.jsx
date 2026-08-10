import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BookingBar from './components/BookingBar.jsx'
import Ambientes from './components/Ambientes.jsx'
import Pousada from './components/Pousada.jsx'
import Parque from './components/Parque.jsx'
import Restaurante from './components/Restaurante.jsx'
import Precos from './components/Precos.jsx'
import GaleriaZoom from './components/GaleriaZoom.jsx'
import Haras from './components/Haras.jsx'
import Experiencias from './components/Experiencias.jsx'
import Eventos from './components/Eventos.jsx'
import Questionario from './components/Questionario.jsx'
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
      {/* Story 1.12: os ambientes vêm antes dos chalés — o visitante conhece o
          lugar antes de ver o preço da diária, e a seção de chalés fica
          encostada na de eventos, o outro produto de reserva. */}
      <Ambientes />
      <Pousada />
      <Eventos />
      <Parque />
      {/* O restaurante vem logo depois da estrutura: o visitante acabou de ver
          "Alimentação" na lista e aqui encontra o cardápio inteiro. */}
      <Restaurante />
      <Precos />
      <GaleriaZoom />
      <Haras />
      <Experiencias />
      <Questionario />
      <Faq />
      <InstaCta />
      <ComoChegar />
      <Footer />
      <WhatsFloat />
    </div>
  )
}
