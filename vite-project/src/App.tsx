import './App.css'
import { Home } from './main/main'
import { Portifolio } from './portifolio/portifolio'
import { Contato } from './contato/contato'
import Transicao from './transicao/transi_components'
import Transicao2 from './transicao/transi2_components'
import Projetos from './portifolio/linguagens'

function App() {

  return (
    <>
      <Home />
      <Transicao />
      <section id="about">
        <Portifolio />
        {/* Conteúdo da seção */}
      </section>
      <Transicao2 />
      <section id="projects">
        <Projetos />
        </section>
      <section id="contact">
        <Contato />
        {/* Conteúdo da seção */}
      </section>
    </>
  )
}

export default App
