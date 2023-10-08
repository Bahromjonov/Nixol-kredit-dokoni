import React, { useState, useEffect } from 'react';
import { mixedData } from '../data';
import { Link } from 'react-router-dom';

const Heart = () => {
  const [likedCards, setLikedCards] = useState([]);

  useEffect(() => {
    const storedLikedCards = JSON.parse(localStorage.getItem('likedCards')) || [];
    setLikedCards(storedLikedCards);
  }, []);

  const likeCard = (cardId) => {
    if (!likedCards.includes(cardId)) {
      const updatedLikedCards = [...likedCards, cardId];
      setLikedCards(updatedLikedCards);
    }
  };

  const dislikeCard = (cardId) => {
    const updatedLikedCards = likedCards.filter((id) => id !== cardId);
    setLikedCards(updatedLikedCards);
  };

  useEffect(() => {
    // likedCards localStorage ga saqlanadi
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);

  return (
    <div>
      <section className='main-container'>
        <div className='text-center pt-10 space-y-5'>
          <p className='font-releway'>
            {likedCards.length === 0 ? 'Sevimli mahsulotlar yo\'q' : 'Sevimli mahsulotlar'}
          </p>
          {likedCards.length === 0 && (
            <span className='block mb-5'>Mahsulotdagi {   <svg className='inline-block'
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 107.39"
              >
              <path
                fill="#ed1b24"
                fill-rule="evenodd"
                d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
              />
              </svg>} belgisi bilan qo'shing️</span>
          )}
          <Link
            to='/'
            className='inline-block main-link hover:bg-white hover:text-brColor border border-brColor'
          >
            Bosh sahifa
          </Link>
        </div>

        {/* Liked kartlar ro'yxati */}
        <ul className='grid grid-cols-4 gap-6 relative'>
          {mixedData.map((e, id) => {
            return (
              
                likedCards.includes(id) && (
                  <li key={id} className='liked-card  bg-white p-5 rounded-lg hover:shadow-lg relative'>
                    <div className='flex justify-center '>
                    <img
                      width={200} height={200} className='mb-4  ' src={e.img} alt={e.title} />

                    </div>
                    <button className='absolute top-5 right-5 ' onClick={() => dislikeCard(id)}>
                    <svg
                 width="30"
                 height="30"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 122.88 107.39"
                 >
                 <path
                   fill="#ed1b24"
                   fill-rule="evenodd"
                   d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
                 />
                 </svg>
                    </button>
                    <div className='space-y-4'>
                      <h2 className='font-bold'>{e.title}</h2>
                      <span className='inline-block font-semibold text-brColor text-xl'>{e.cost}</span>
                      <p className='font-medium'>{e.text}</p>
                    </div>
                  </li>
                )
            
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Heart;
