import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard, minusCount, plusCount } from '../store/slice/cardSlice';
import { Link } from 'react-router-dom';
import { populationFilter } from '../store/filter';

import deleteIcon from '../assets/icons/delete-icon.svg'

const Basket = () => {
  const { card } = useSelector((store) => store.card);

  let total = 0

  if (card.length > 0) {
    card.forEach(product => {
      const costInSom = parseFloat(product.cost.replace(/\s+/g, "").replace("so'm", "").replace(",", "."));
      total += costInSom * product.count;
    });
  }

  const dispatch = useDispatch()

  return (
    <div>
      <div className='main-container flex justify-between items-start py-5 '>
        {card.length > 0 ? (
          <ul className='flex flex-col space-y-5 '>
            {card.map((product, index) => (
              <li key={index} className='max-w-7xl flex  justify-between items-center space-x-5 bg-white drop-shadow-xl rounded-lg px-5 py-7'>
                <div className='flex items-center space-x-2'>
                  <img className='w-32' src={product.img} alt={product.title} />
                  <h3 className='text-xl font-medium'>{product.title}</h3>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-2'>
                    <button disabled={product.count === 1} onClick={() => dispatch(minusCount(product.id))} className='bg-brColor w-8 h-8 rounded-l-lg'>
                      -
                    </button>
                    <span>{product.count}</span>
                    <button onClick={() => dispatch(plusCount(product.id))} className='bg-brColor w-8 h-8 rounded-r-lg'>
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <span className='text-xl block'>{product.cost}</span>
                  <button onClick={() => dispatch(deleteCard(product))} className='text-red-500 flex items-end'>
                    <img className='w-6' src={deleteIcon} alt="delete icon" />
                    O'chirish
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className='pt-10 text-center space-y-5'>
            <h2 className='text-xl font-medium'>Savatchangiz bo'sh</h2>
            <Link className='inline-block main-link hover:bg-white hover:text-brColor border border-brColor px-4 py-2 rounded-md' to='/'>
              Bosh sahifa
            </Link>
          </div>
        )}
        <div className='w-full max-w-sm  total-sum  font-medium text-lg bg-white p-10 rounded-lg drop-shadow-xl'>
          <span className='font-bold  mr-2'> Umumiy summa:</span>
          {populationFilter(total)}  so'm
        </div>
      </div>
    </div>
  );
};

export default Basket;
