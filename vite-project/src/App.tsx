import './App.css'
import { Home } from './main/main'
import { Portifolio } from './portifolio/portifolio'
import { Contato } from './contato/contato'
import Transicao from './transicao/transi_components'
import Transicao2 from './transicao/transi2_components'

function App() {

  return (
    <>
      <Home />
      <Transicao />
      <section id="portifolio">
        <Portifolio />
        {/* Conteúdo da seção */}
      </section>
      <Transicao2 />
      <section id="contato">
        <Contato />
        {/* Conteúdo da seção */}
      </section>
    </>
  )
}

export default App
