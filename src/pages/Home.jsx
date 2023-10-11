import React from 'react'
import MixedData from '../components/MixedData'
import Swiper from '../components/Swiper'

const Home = ({likedCards, setLikedCards}) => {
  return (
    <div className='main-container'>
      <Swiper />
     <MixedData likedCards={likedCards} setLikedCards={setLikedCards}/>
    </div>
  )
}

export default Home