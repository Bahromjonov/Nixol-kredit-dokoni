import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainRootLayout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainRootLayout