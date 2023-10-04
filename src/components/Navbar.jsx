import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='main-container py-2 nav'>
        <ul className='flex items-center justify-between font-bold flex-wrap'>
            <li>
                <NavLink to='smartfonlar' className=' '>Smartfonlar</NavLink>
            </li>
            <li>
                <NavLink to='noutboklar' className=' '>Noutbuklar</NavLink>
            </li>
            <li>
                <NavLink to='maishiyTexnikalar' className=' '>Maishiy taxnikalar</NavLink>
            </li>
            <li>
                <NavLink to='mebellar' className=' '>Mebellar</NavLink>
            </li>
            <li>
                <NavLink to='qurilishAsboblari' className=' '>Qurilish asboblari</NavLink>
            </li>
            <li>
                <NavLink to='aloqa' className=' '>Aloqa</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar