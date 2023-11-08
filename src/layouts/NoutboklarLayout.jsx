import React from 'react'
import { Outlet } from 'react-router-dom'
import Noutboklar from '../pages/Noutboklar'

const NoutboklarLayout = () => {
    return (
        <div className='main-container flex gap-10 justify-between py-10'>
        <Noutboklar />
            <Outlet />
        </div>
    )
}

export default NoutboklarLayout