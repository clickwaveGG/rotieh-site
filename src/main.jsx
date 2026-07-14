import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gestao from './gestao/Gestao.jsx'

// roteamento simples por caminho: /gestao abre o painel da gerente (demo)
const éGestao = window.location.pathname.startsWith('/gestao')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {éGestao ? <Gestao /> : <App />}
  </StrictMode>,
)
