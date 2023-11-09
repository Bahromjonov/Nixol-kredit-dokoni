import React from 'react'
import { NavLink } from 'react-router-dom'

const Mebellar = () => {
  return (
    <div className=' bg-white p-5 w-full max-w-[340px] h-full  rounded-lg sticky top-[120px] max-h-52'>
      <h2 className='font-semibold text-xl py-4 border-b-2'>Ishlab chiqaruvchi</h2>
      <nav>
        <ul className=' space-y-5  pt-5'>
          <li>
            <NavLink to='oshxonaMebellari' className='NavLink'>Oshxona mebellari</NavLink>
          </li>
          <li>
            {/* <NavLink to='artel' className='NavLink'>Artel</NavLink> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Mebellar