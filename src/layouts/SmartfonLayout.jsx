import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Apple from '../pages/Apple'
import Honor from '../pages/Honor'
import Smartfonlar from '../pages/Smartfonlar'

const SmartfonLayout = () => {
    return (
        <div className='main-container flex justify-between '>
        <Smartfonlar />
           
            <Outlet />
        </div>
    )
}

export default SmartfonLayout