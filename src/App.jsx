import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainRouter from './layouts/MainRootLayout'
import Basket from './pages/Basket'
import Heart from './pages/Heart'
import Smartfonlar from './pages/Smartfonlar'
import Noutboklar from './pages/Noutboklar'
import MaishiyTexnikalar from './pages/MaishiyTexnikalar'
import QurilishAsboblari from './pages/QurilishAsboblari'

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
      </Route>
    )
  )

  return (
       <RouterProvider router={router} />
  )
}

export default App
