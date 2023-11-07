import React from 'react'

const Aloqa = () => {
    return (
        <div className='main-container py-5'>
            {/* Telefon no'merlari */}
            <div className='space-y-4 mb-10'>
                <a href='tel:+998948079737'  className='text-brColor text-2xl font-bold '>+998 94 807 97 37</a>
                <p className='font-medium text-xl '><span className='font-bold '>Manzil:</span> <br /> Andijon viloyati Baliqchi tumani Xo'jabod shaxarchasi </p>
                <p className='font-medium text-xl'><span className='font-bold'>Ish vaqtlari:</span> 8:00 - 18:00 </p>
            </div>
            <div>
                <iframe className='w-full rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.1696927520875!2d72.01245979124744!3d40.881844915876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca1798ca2f399%3A0xe2e7a4c0de685b0!2sNihol%20market!5e1!3m2!1suz!2s!4v1696401996897!5m2!1suz!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Aloqa