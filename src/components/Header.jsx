import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import img from '../assets/images/Nixol.png'
const Header = () => {
   
    
    return (
        <header className='py-5  bg-white '>
            <div className='main-container'>
                <div>
                    <Link><img width={100} height={50} className='border-0 m-0' src={img} alt="Nixol image" /></Link>
                </div>
                <div>

                </div>
            </div>

        </header>
    )
}

export default Header