import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';

import NavBar from '../layouts/NavBar'
import Mainlayouth from '../layouts/MainLayouth.jsx'

import Portfolio from '../pages/Portfolio.jsx'
import Certifies from '../pages/Certifies.jsx'
import { CertProvider } from '../context/certProvider.jsx';

function App() {

  return (
    <BrowserRouter>
      <CertProvider>    
        <Routes>
          <Route path='/' element={<Mainlayouth />}>

            <Route index element={<Portfolio />} />
            <Route path='/formacion' element={<Certifies />} />
          
          
          </Route>

        </Routes>      
      </CertProvider>
    </BrowserRouter>
    
  )
}

export default App
