import React, { useState, useEffect } from 'react';
import { mixedData } from '../data';
import '../Css/style.css';
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
            <span className='block mb-5'>Mahsulotdagi ❤️ belgisi bilan qo'shing️</span>
          )}
          <Link
            to='/'
            className='inline-block main-link hover:bg-white hover:text-brColor border border-brColor'
          >
            Bosh sahifa
          </Link>
        </div>

        {/* Liked kartlar ro'yxati */}
        {/* <ul className='grid grid-cols-5 gap-6 relative'> */}
          {mixedData.map((e, id) => {
            return (
              
                likedCards.includes(id) && (
                  <div key={id} className='liked-card grid grid-cols-5  bg-white p-5 rounded-lg hover:shadow-lg relative'>
                    <img
                      width={200} height={200} className='mb-4 hover:transition-transform ' src={e.img} alt={e.title} />
                    <button className='absolute top-5 right-5 ' onClick={() => dislikeCard(id)}>❤️</button>
                    <div className='space-y-4'>
                      <h2 className='font-bold'>{e.title}</h2>
                      <span className='inline-block font-semibold text-brColor text-xl'>{e.cost}</span>
                      <p className='font-medium'>{e.text}</p>
                    </div>
                  </div>
                )
            
            );
          })}
        {/* </ul> */}
      </section>
    </div>
  );
};

export default Heart;
