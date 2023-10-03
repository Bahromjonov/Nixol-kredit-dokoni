import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='main-container py-2'>
        <ul className='flex items-center justify-between'>
            <li>
                <NavLink to='smartfonlar' className='font-medium '>Smartfonlar</NavLink>
            </li>
            <li>
                <NavLink className='font-medium '>Noutbuklar</NavLink>
            </li>
            <li>
                <NavLink className='font-medium '>Maishiy taxnikalar</NavLink>
            </li>
            <li>
                <NavLink className='font-medium '>Mebellar</NavLink>
            </li>
            <li>
                <NavLink className='font-medium '>Qurilish asboblari</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar