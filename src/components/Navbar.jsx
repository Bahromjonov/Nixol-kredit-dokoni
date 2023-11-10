import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='main-container py-3 nav'>
        <ul className='flex items-center justify-between font-bold flex-wrap'>
            <li>
                <NavLink to='smartfonlar'>Smartfonlar</NavLink>
            </li>
            <li>
                <NavLink to='noutboklar'>Noutbuklar</NavLink>
            </li>
            <li>
                <NavLink to='maishiyTexnikalar'>Maishiy taxnikalar</NavLink>
            </li>
            <li>
                <NavLink to='mebellar'>Mebellar</NavLink>
            </li>
            <li>
                <NavLink to='idishTovoqlar'>Idish-tovoqlar</NavLink>
            </li>
            <li>
                <NavLink to='aloqa'>Aloqa</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar