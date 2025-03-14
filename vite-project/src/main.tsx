import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/index.tsx';
import PrePage from './pre/prepage_components.tsx';



createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='' element={<PrePage/>}/>
          <Route path="/home" element={<App />} />
          {/*<Route path="#contato" element={<Contato />} />
          <Route path="/teste" element={<Testes />} />*/}
        </Routes>
      </Router>
    </Provider>
  </>

)
