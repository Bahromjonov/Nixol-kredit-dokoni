import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer';
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
        <main className='grow mb-10'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainRootLayout