import React from 'react'
import { NavLink } from 'react-router-dom'

const Noutboklar = () => {
  return (
    <div className=' bg-white p-5 w-full max-w-[340px] h-full  rounded-lg sticky top-[120px] max-h-52'>
      <h2 className='font-semibold text-xl py-4 border-b-2'>Ishlab chiqaruvchi</h2>
      <nav>
        <ul className=' space-y-5  pt-5'>
          <li>
            <NavLink to='asus' className='NavLink'>Asus</NavLink>
          </li> 
          <li>
            <NavLink to='acer' className='NavLink'>Acer</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Noutboklar