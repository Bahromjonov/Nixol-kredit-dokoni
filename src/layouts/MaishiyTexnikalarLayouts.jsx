import React from 'react'
import { Outlet } from 'react-router-dom'
import MaishiyTexnikalar from '../pages/MaishiyTexnikalar'

const MaishiyTexnikalarLayouts = () => {
  return (
    <div className='main-container flex gap-10 justify-between py-10'>
    <MaishiyTexnikalar/>
        <Outlet />
    </div>
  )
}

export default MaishiyTexnikalarLayouts