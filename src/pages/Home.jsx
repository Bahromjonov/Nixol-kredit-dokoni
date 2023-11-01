import React from 'react'
import Cta from '../components/Cta'
import MixedData from '../components/MixedData'
import Swiper from '../components/Swiper'

const Home = ({ likedCards, setLikedCards }) => {
  return (
    <div className='main-container'>
      <Swiper />
      <MixedData likedCards={likedCards} setLikedCards={setLikedCards} />
      <Cta />
    </div>
  )
}

export default Home