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
import { useState } from 'react'

function App() {

  const [likedCards, setLikedCards] = useState([]);
  const [basket, setBasket ] = useState([])

  const removeCard = (cardId) => {
    const updatedLikedCards = likedCards.filter((id) => id !== cardId);
    setLikedCards(updatedLikedCards);
  };
 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter likedCards={likedCards} setLikedCards={setLikedCards} basket={basket} setBasket={setBasket}/>}>
        <Route index  element={<Home likedCards={likedCards} setLikedCards={setLikedCards} />} />
        <Route path='/basket' element={<Basket likedCards={likedCards} removeCard={removeCard} basket={basket} setBasket={setBasket}/>} />
        <Route path='/heart' element={<Heart removeCard={removeCard}/>} />
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
