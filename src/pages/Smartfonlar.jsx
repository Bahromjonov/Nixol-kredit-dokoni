import React from 'react'
import { NavLink } from 'react-router-dom'

const Smartfonlar = () => {
  return (
    <section className=' bg-white p-5 w-full max-w-sm h-full  rounded-lg'>
      <h2 className='font-semibold text-xl py-4 border-b-2'>Ishlab chiqaruvchi</h2>
      <nav>
        <ul className=' space-y-5  pt-5'>
          <li>
            <NavLink to='honor' className='NavLink'>Honor</NavLink>
          </li>
          <li>
            <NavLink to='apple' className='NavLink'>Apple</NavLink>
          </li> 
        </ul>
      </nav>
    </section>
  )
}

export default Smartfonlar