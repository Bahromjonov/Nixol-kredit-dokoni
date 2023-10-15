import React from 'react'
import { NavLink } from 'react-router-dom'

const Smartfonlar = () => {
  return (
    <section className='bg-white p-5'>
      <div>
        <ul className='py-5'>
          <li>
            <NavLink to='honor' className='font-bold'>Honor</NavLink>
          </li>
          <li>
            <NavLink to='apple' className='font-bold'>Apple</NavLink>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Smartfonlar