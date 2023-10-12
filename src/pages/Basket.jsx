import React, { useState, useEffect } from 'react';
import { mixedData } from '../data';

const Basket = ({ likedCards, removeCard, basket, addToLikedCards }) => {
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    const storedBasketCount = localStorage.getItem('basketCount');
    if (storedBasketCount) {
      setBasketCount(parseInt(storedBasketCount));
    }
  }, []);

  useEffect(() => {
    // Sizning boshqa kodlaringiz
  }, [likedCards, basket]);

  useEffect(() => {
    // basketCount o'zgarayotganda uni Local Storage ga saqlash
    localStorage.setItem('basketCount', basketCount.toString());
  }, [basketCount]);

  return (
    <section className="main-container text-center pt-10 flex justify-between">
      <div className="w-full max-w-[900px]">
        {basket.length === 0 ? (
          <p>Sevimli mahsulotlar yo'q</p>
        ) : (
          <div className="space-y-5">
            {basket.map((cardId) => (
              <div
                className="flex items-center justify-between bg-white rounded-2xl hover:shadow-lg border p-5"
                key={cardId}
              >
                <div className="flex flex-col justify-start">
                  <h3>{mixedData[cardId].title}</h3>
                  <p className="">{mixedData[cardId].text}</p>
                  <span>{mixedData[cardId].cost}</span>
                </div>
                <div className="space-x-5">
                  <button className="font-bold">
                    O'chirish
                  </button>
                  <button className="font-bold" onClick={() => addToLikedCards(cardId)}>
                    Tanlanganlarga qo'shish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>Umumiy summa: {basketCount}</div>
    </section>
  );
};

export default Basket;
