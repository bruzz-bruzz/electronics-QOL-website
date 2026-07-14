import { createRoot } from 'react-dom/client'
import Landingpage from './components/Landingpage.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landingpage/>}></Route>
  </Routes>
  </BrowserRouter>
)
