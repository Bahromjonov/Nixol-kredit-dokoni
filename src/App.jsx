import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainRouter from './layouts/MainRootLayout'
import Basket from './pages/Basket'
import Heart from './pages/Heart'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter />}>
        <Route index element={<Home />} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='/heart' element={<Heart/>} />
      </Route>
    )
  )

  return (
       <RouterProvider router={router} />
  )
}

export default App
