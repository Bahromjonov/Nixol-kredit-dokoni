import React from 'react';
import { mixedData } from '../data';

const Basket = ({ likedCards, removeCard }) => {
  return (
    <section className="main-container text-center pt-10 flex justify-between">
      <div>
        {likedCards.length === 0 ? (
          <p>Savatda hozircha mahsulot yo'q</p>
        ) : (
          <div className='space-y-5  '>
            {likedCards.map((cardId) => (
              <div className='flex  bg-white rounded-2xl shadow-lg' key={cardId}>
                {/* Mahsulot ma'lumotlari */}
                <img className='w-52' src={mixedData[cardId].img} alt={mixedData[cardId].title} />
                <div>
                <h3>{mixedData[cardId].title}</h3>
                <p>{mixedData[cardId].text}</p>
                </div>
                <span>{mixedData[cardId].cost}</span>
                {/* Mahsulotni savatdan olib tashlash tugmasi */}
                <button onClick={() => removeCard(cardId)}>Savatdan olib tashlash</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        Bu yerda umumiy summa chiqadi
      </div>
    </section>
  );
};

export default Basket;
