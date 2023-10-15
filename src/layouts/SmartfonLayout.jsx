import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Smartfonlar from '../pages/Smartfonlar'

const SmartfonLayout = () => {
    return (
        <div className='main-container flex gap-10 py-10'>
        <Smartfonlar />
           
            <Outlet />
        </div>
    )
}

export default SmartfonLayout