import React from 'react'
import { Link } from 'react-router-dom'

const Heart = () => {
    return (
        <section className='main-container '>
            <div className='text-center pt-10 space-y-5'>
                <p className='font-releway'>Sevimli mahsulotlar yo'q</p> 
                <span className='block'>Mahsulotdagi ❤️ belgisi bilan qo'shing️</span>
                <Link className='block '>Bosh sahifaga o'tish</Link>
            </div>
        </section>
    )
}

export default Heart