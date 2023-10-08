import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainRootLayout = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
    setCartCount(storedCartCount);
  }, []);
  
  return (
    <div className='bg-bodyDgColor min-h-screen font-Inter flex flex-col '>
        <Header cartCount={cartCount}/>
        <main className='grow'>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainRootLayout