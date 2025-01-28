import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portifolio } from './portifolio/portifolio.tsx';
import { Provider } from 'react-redux'
import { store } from './store/index.tsx';


createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="" element={<App />} />
          <Route id='#portifolio' path="#portifolio" element={<Portifolio />} />
          {/*<Route path="#contato" element={<Contato />} />
          <Route path="/teste" element={<Testes />} />*/}
        </Routes>
      </Router>
    </Provider>
  </>

)
