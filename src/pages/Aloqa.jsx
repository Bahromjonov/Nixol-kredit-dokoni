import React from 'react'

const Aloqa = () => {
    return (
        <div className='main-container py-5'>
            <div className='mb-10'>
                <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.1696927520875!2d72.01245979124744!3d40.881844915876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca1798ca2f399%3A0xe2e7a4c0de685b0!2sNihol%20market!5e1!3m2!1suz!2s!4v1696401996897!5m2!1suz!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* Telefon no'merlari */}
            <div>
                <a href='tel:+998948079737'  className='text-brColor text-2xl font-bold '>+998 93 807 97 37</a>
            </div>
        </div>
    )
}

export default Aloqa