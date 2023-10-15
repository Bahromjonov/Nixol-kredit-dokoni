import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard } from '../store/slice/cardSlice';

import { Link } from 'react-router-dom';

const Basket = () => {
  const { card } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  return (
    <div className='main-container'>

      {card.length > 0 ? (
        <ul className="grid grid-cols-4 gap-5">
          {card.map((product, index) => (
            <li key={index} className='border border-gray-300 rounded-lg p-5 space-y-5'>
              <img className='h-52 mx-auto' src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <button onClick={() => dispatch(deleteCard(product))} className='bg-red-600 text-white rounded-md py-2.5 w-full'>
                Remove from Basket
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className='pt-10 text-center space-y-5'>
          <h2 className=' font-medium text-2xl'>Savatchangiz bo'sh</h2>
          <Link className='inline-block main-link hover:bg-white hover:text-brColor border border-brColor' to='/'>Bosh sahifa</Link>
        </div>

      )}
    </div>
  );
}

export default Basket;
