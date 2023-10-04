import React from 'react'
import Swiper from '../components/Swiper'
import { mixedData } from '../data'

const Home = () => {

  return (
    <div className='main-container'>
      <Swiper />
      <div >
        <ul className='grid grid-cols-5 gap-5 '>
          {
            mixedData.map((e, id) => {
              return (
                <li key={id} className='bg-white border p-5 rounded-lg'>
                  <img src={e.img} alt={e.title} />
                  <div className='space-y-4 '>
                    <h2 className='font-medium'>{e.title}</h2>
                    <span className='inline-block'>{e.cost}</span>
                  </div>

                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Home