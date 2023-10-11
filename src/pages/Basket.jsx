import React from 'react';
import { mixedData } from '../data';

const Basket = ({ likedCards, removeCard }) => {
  
  return (
    <section className="main-container text-center pt-10 flex justify-between">
      <div className='w-full max-w-[900px]'>
        {likedCards.length === 0 ? (
          <p>Savatda hozircha mahsulot yo'q</p>
        ) : (
          <div className='space-y-5 '>
            {likedCards.map((cardId) => (
              <div className=' flex items-center justify-between bg-white rounded-2xl hover:shadow-lg border p-5' key={cardId}>
                {/* Mahsulot ma'lumotlari */}
                <img className='w-52' src={mixedData[cardId].img} alt={mixedData[cardId].title} />
                <div className='flex flex-col justify-start '>
                  <h3>{mixedData[cardId].title}</h3>
                  <p className=''>{mixedData[cardId].text}</p>
                  <span>{mixedData[cardId].cost}</span>
                </div>
                <div className='space-x-5 '>
                  {/* Mahsulotni savatdan olib tashlash tugmasi */}
                  <button className='font-bold  hover:text-brColor' onClick={() => removeCard(cardId)}>O'chirirsh</button>
                </div>
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
