
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portifolio } from './portifolio/portifolio.tsx';
import { Contato } from './contato/contato.tsx';


createRoot(document.getElementById('root')!).render(

  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portifolio" element={<Portifolio />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  </Router>
)
