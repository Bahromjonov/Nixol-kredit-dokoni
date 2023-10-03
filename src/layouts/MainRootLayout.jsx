import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainRootLayout = () => {
  return (
    <div className='bg-bodyDgColor min-h-screen font-Inter flex flex-col '>
        <Header/>
        <main className='grow'>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainRootLayout