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
import Honor from './pages/Honor'
import SmartfonLayout from './layouts/SmartfonLayout'
import Apple from './pages/Apple'
import NoutboklarLayout from './layouts/NoutboklarLayout'
import Acer from './pages/Acer'
import Asus from './pages/Asus'
import MaishiyTexnikalarLayouts from './layouts/MaishiyTexnikalarLayouts'
import PageNotFound from './pages/PageNotFound'
import Arshia from './pages/Arshia'
import Artel from './pages/Artel'
import Mebellar from './pages/Mebellar'
import MebellarLayout from './layouts/MebellarLayout'
import OshxonaMebellari from './pages/OshxonaMebellari'
import Smartfonlarr from './pages/Smartfonlarr'
import Noutboklarr from './pages/Noutboklarr'

function App() {

  const [likedCards, setLikedCards] = useState([]);
  const [basket, setBasket] = useState([])

  const removeCard = (cardId) => {
    const updatedLikedCards = likedCards.filter((id) => id !== cardId);
    setLikedCards(updatedLikedCards);
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter likedCards={likedCards} setLikedCards={setLikedCards} basket={basket} setBasket={setBasket} />}>
        <Route index element={<Home likedCards={likedCards} setLikedCards={setLikedCards} />} />
        <Route path='basket' element={<Basket likedCards={likedCards} removeCard={removeCard} basket={basket} setBasket={setBasket} />} />
        <Route path='heart' element={<Heart removeCard={removeCard} />} />

        <Route path='smartfonlar' element={<SmartfonLayout />} >
          <Route path='smartfonlar' element={<Smartfonlar />} />
          <Route index element={<Smartfonlarr/>}/>
          <Route path='smartfonlarr' element={<Smartfonlarr/>}/>
          <Route path='honor' element={<Honor />} />
          <Route path='apple' element={<Apple />} />
        </Route>
        
        <Route path='noutboklar' element={<NoutboklarLayout />}>
          <Route path='noutboklar' element={<Noutboklar />} />
          <Route index element={<Noutboklarr />} />
          <Route path='noutboklarr' element={<Noutboklarr />} />
          <Route path='acer' element={<Acer />} />
          <Route path='asus' element={<Asus />} />
        </Route>
        <Route path='maishiyTexnikalar' element={<MaishiyTexnikalarLayouts />}>
          <Route path='maishiyTexnikalar' element={<MaishiyTexnikalar />} />
          <Route index element={<Arshia />} />
          <Route path='arshia' element={<Arshia />} />
          <Route path='artel' element={<Artel />} />
        </Route>
        <Route path='mebellar' element={<MebellarLayout />}>
          <Route path='mebellar' element={<Mebellar />} />
          <Route index element={<OshxonaMebellari />} />
          <Route path='oshxonaMebellari' element={<OshxonaMebellari />} />

        </Route>

        <Route path='qurilishAsboblari' element={<QurilishAsboblari />} />
        <Route path='aloqa' element={<Aloqa />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
