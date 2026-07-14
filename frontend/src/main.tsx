import { createRoot } from 'react-dom/client'
import Landingpage from './components/Landingpage.tsx'
import Resistor from './components/Resistor.tsx'
import Ohmlaw from './components/Ohmlaw.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landingpage/>}></Route>
    <Route path='/ohmLaw' element={<Ohmlaw/>}></Route>
    <Route path='/resistor' element={<Resistor/>}></Route>
  </Routes>
  </BrowserRouter>
)
