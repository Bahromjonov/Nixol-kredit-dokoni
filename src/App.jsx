import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainRouter from './layouts/MainRootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  return (
       <RouterProvider router={router} />
  )
}

export default App
