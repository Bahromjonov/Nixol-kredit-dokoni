import React, { useState, useEffect } from 'react';
import { mixedData } from '../data';

const MixedData = () => {
  const [cardStates, setCardStates] = useState(Array(mixedData.length).fill(false));
  const [likedCards, setLikedCards] = useState([]);


  const toggleCard = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);

    if (!likedCards.includes(index)) {
      const updatedLikedCards = [...likedCards, index];
      setLikedCards(updatedLikedCards);
    } else {
      const updatedLikedCards = likedCards.filter((id) => id !== index);
      setLikedCards(updatedLikedCards);
    }
  };

  useEffect(() => {
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);

  return (
    <div>
      <ul className='grid grid-cols-4 gap-5 '>
        {mixedData.map((e, id) => {
          return (
            <li key={id} className={`bg-white p-5 rounded-lg hover:shadow-lg relative ${cardStates[id] ? 'liked' : 'not-liked'}`}>
             <div className='flex justify-center'>
              <img
                width={200}
                height={200}
                className='mb-4'
                src={e.img}
                alt={e.title}
              />
             </div>
              <button
                onClick={() => toggleCard(id)}
                className={`card-toggle-button absolute top-5 right-5 ${cardStates[id] ? 'liked' : 'not-liked'}`}
              >
                {cardStates[id] ? (
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
                ) : (
                  <svg
                    width="30"
                    height="30"
                    version="1.1"
                    id="Capa_1"
                    xmlnsXlink="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 471.701 471.701"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        fill="black"
                        d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                        c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                        l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                        C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                        s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                        c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                        C444.801,187.101,434.001,213.101,414.401,232.701z"
                      />
                    </g>
                  </svg>
                )}
              </button>
              <div className='space-y-4'>
                <h2 className='font-bold'>{e.title}</h2>
                <span className='inline-block font-semibold text-brColor text-xl'>{e.cost}</span>
                <p className='font-medium'>{e.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MixedData;
