import React from 'react'
import { NavLink } from 'react-router-dom'

const Smartfonlar = () => {
  return (
    <section className='bg-white p-5'>
      <nav className=''>
        <ul className=' w-md'>
          <li>
            <NavLink to='honor' className='font-bold'>Honor</NavLink>
          </li>
          <li>
            <NavLink to='apple' className='font-bold'>Apple</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Smartfonlar