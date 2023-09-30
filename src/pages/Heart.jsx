import React from 'react'
import { Link } from 'react-router-dom'

const Heart = () => {
    return (
        <section className='main-container '>
            <div className='text-center pt-10 space-y-5'>
                <p className='font-releway'>Sevimli mahsulotlar yo'q</p> 
                <span className='block mb-5'>Mahsulotdagi ❤️ belgisi bilan qo'shing️</span>
                <Link to='/' className='inline-block main-link hover:bg-white hover:text-brColor  border border-brColor '>Bosh sahifa</Link>
            </div>
        </section>
    )
}

export default Heart