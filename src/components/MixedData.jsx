import React from 'react'
import { mixedData } from '../data'

const MixedData = () => {
  return (
    <div >
    <ul className='grid grid-cols-5 gap-5 flex-wrap'>
       {
         mixedData.map((e, id) => {
           return (
             <li key={id} className='bg-white  p-5 rounded-lg hover:shadow-lg'>
               <img width={200} height={200} className='mb-4 hover:transition-transformv hover:origin-center' src={e.img} alt={e.title} />
               <div className='space-y-4 '>
                 <h2 className='font-bold'>{e.title}</h2>
                 <span className='inline-block font-semibold text-brColor text-xl'>{e.cost}</span>
                 <p className='font-medium'>{e.text}</p>
               </div>

             </li>
           )
         })
       }
     </ul>
   </div>
  )
}

export default MixedData