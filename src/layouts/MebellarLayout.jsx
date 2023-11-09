import React from 'react'
import { Outlet } from 'react-router-dom'
import Mebellar from '../pages/Mebellar'

const MebellarLayout = () => {
  return (
    <div className='main-container flex gap-10 justify-between py-10'>
        <Mebellar />
            <Outlet />
        </div>
  )
}

export default MebellarLayout