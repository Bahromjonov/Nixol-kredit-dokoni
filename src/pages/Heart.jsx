import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mixedData } from '../data';

const Heart = () => {
  const [likedCards, setLikedCards] = useState([]);

  // Kartni "liked" qilish funksiyasi
  const likeCard = (cardId) => {
    if (!likedCards.includes(cardId)) {
      setLikedCards([...likedCards, cardId]);
    }
  };

  // Kartni "not-liked" qilish funksiyasi
  const dislikeCard = (cardId) => {
    const updatedLikedCards = likedCards.filter((id) => id !== cardId);
    setLikedCards(updatedLikedCards);
  };

  return (
    <section className='main-container'>
      <div className='text-center pt-10 space-y-5'>
        <p className='font-releway'>Sevimli mahsulotlar yo'q</p>
        <span className='block mb-5'>Mahsulotdagi ❤️ belgisi bilan qo'shing️</span>
        <Link to='/' className='inline-block main-link hover:bg-white hover:text-brColor  border border-brColor '>Bosh sahifa</Link>
      </div>

      {/* Liked kartlar ro'yxati */}
      {mixedData.map((e, id) => {
        return (
          likedCards.includes(id) && (
            <div key={id} className='liked-card'>
              <button onClick={() => dislikeCard(id)}>❌</button>
              <p>{e.title}</p>
            </div>
          )
        );
      })}
    </section>
  );
};

export default Heart;
