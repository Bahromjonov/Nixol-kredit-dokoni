import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainRootLayout = ({likedCards, setLikedCards}) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
    setCartCount(storedCartCount);
  }, []);
  
  return (
    <div className='bg-bodyDgColor min-h-screen font-Inter flex flex-col scroll-smooth'>
        <Header cartCount={cartCount} likedCards={likedCards} setLikedCards={setLikedCards}/>
        <main className='grow'>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainRootLayout