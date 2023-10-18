import React from 'react';
import { honor } from '../data';

const Honor = () => {
  return (
    <section className=''>
      <h3 className='mb-5'>Honor mobile smartfonlari</h3>
      <ul className='grid grid-cols-3'>
        {honor.map((e, id) => ( 
          <li key={id} className='bg-white p-6  rounded-lg hover:shadow-lg'>
            <img className='mb-5 w-200 h-200 mx-auto' src={e.img} alt={e.id} />
            <div className='space-y-4'>
              <h4>{e.title}</h4>
              <span className='cost'>{e.cost}</span>
              <p className='block'>{e.brend}</p>
              <p>{e.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Honor;
