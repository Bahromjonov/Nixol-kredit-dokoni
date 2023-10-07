import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import MainRouter from './layouts/MainRootLayout'

import Home from './pages/Home'
import Basket from './pages/Basket'
import Heart from './pages/Heart'
import Smartfonlar from './pages/Smartfonlar'
import Noutboklar from './pages/Noutboklar'
import MaishiyTexnikalar from './pages/MaishiyTexnikalar'
import QurilishAsboblari from './pages/QurilishAsboblari'
import Aloqa from './pages/Aloqa'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter />}>
        <Route index element={<Home />} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='/heart' element={<Heart/>} />
        <Route path='/smartfonlar' element={<Smartfonlar/>} />
        <Route path='/noutboklar' element={<Noutboklar/>} />
        <Route path='/maishiyTexnikalar' element={<MaishiyTexnikalar/>} />
        <Route path='/mebellar' element={<MaishiyTexnikalar/>} />
        <Route path='/qurilishAsboblari' element={<QurilishAsboblari/>} />
        <Route path='/aloqa' element={<Aloqa/>} />
      </Route>
    )
  )

  return (
       <RouterProvider router={router} />
  )
}

export default App
