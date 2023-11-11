import React from 'react'
import { NavLink } from 'react-router-dom'

const IdishTovoqlar = () => {
  return (
    <div className=' bg-white p-5 w-full max-w-[340px] h-full  rounded-lg sticky top-[130px]'>
      <h2 className='font-semibold text-xl py-4 border-b-2'>Ishlab chiqaruvchi</h2>
      <nav>
        <ul className=' space-y-5  pt-5'>
          <li>
            <NavLink to='idishTovoqlarr' className='NavLink'>Hammasi</NavLink>
          </li> 
          <li>
            <NavLink to='fisman' className='NavLink'>Fissman</NavLink>
          </li> 
          <li>
            <NavLink to='berghoff' className='NavLink'>BergHOFF</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default IdishTovoqlar