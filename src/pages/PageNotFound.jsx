import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='main-container py-2 '>

            <div className='flex items-center justify-center py-5'>
                <img className='max-w-[500px] rounded-lg' src="https://miro.medium.com/v2/resize:fit:1400/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="gif" />
            </div>
            <div className='flex flex-col justify-center items-center space-y-6'>
                <span className='font-medium text-xl block'>Sahifa topilmadi!</span>
                <p>Xavotirlanmang va xarid qilishda davom eting</p>
                <Link className='inline-block main-link hover:bg-white hover:text-brColor border border-brColor px-4 py-2 rounded-md' to='/'>
                    Bosh sahifa
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound