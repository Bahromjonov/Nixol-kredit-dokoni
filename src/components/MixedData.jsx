import React, { useState, useEffect } from 'react';
import { mixedData } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css'
import heart from '../assets/icons/heart-icon.svg'
import { addCard } from '../store/slice/cardSlice';
import { useDispatch } from 'react-redux';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Imgs
import acer from '../assets/images/acer.webp'
import apple from '../assets/images/apple.webp'
import artel from '../assets/images/artel.webp'
import asus from '../assets/images/asus.webp'
import kukmara from '../assets/images/kukmara.webp'
import lenovo from '../assets/images/lenovo.webp'
import samsung from '../assets/images/samsung.webp'
import sony from '../assets/images/sony.webp'
import intex from '../assets/images/intex.webp'
import xiomi from '../assets/images/xiaomi.webp'

const MixedData = ({ likedCards, setLikedCards }) => {
  const [cardStates, setCardStates] = useState(Array(mixedData.length).fill(false));

  const toggleCard = (index) => {
    try {
      // Muammo yuz berish mumkin bo'lgan qismi
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

      // LocalStoragega 'likedCards' ro'yxatini saqlash
      localStorage.setItem('likedCards', JSON.stringify(likedCards));
    } catch (error) {
      console.error('toggleCard funktsiyasida xato: ', error);
    }
  };
  const dispatch = useDispatch()
  const addToCard = (product) => {
    dispatch(addCard(product))
  }

  useEffect(() => {
    // LocalStoragedan 'likedCards' ro'yxatini olish
    const storedLikedCards = JSON.parse(localStorage.getItem('likedCards')) || [];
    setLikedCards(storedLikedCards);

    // Aos initiatsiyasini chaqirish
    Aos.init();
  }, [setLikedCards])
  return (
    <div>
      <ul className='grid grid-cols-4 gap-5 '>
        {mixedData.map((e, id) => {
          return (
            <li key={id} data-aos="fade-up"
              data-aos-anchor-placement="top-center">

              <div className={`bg-white p-6 h-full max-h-[600px] rounded-lg hover:shadow-lg relative ${cardStates[id] ? 'liked' : 'not-liked'} flex flex-col justify-end`}>
                <div className='flex justify-center  relative'>

                  <div>
                    <img className='mb-5 w-200 h-200 ' src={e.img} alt={e.title} />
                  </div>
                  {/* Toggle like */}
                  <button
                    onClick={() => toggleCard(id)}
                    className={`card-toggle-button  ${cardStates[id] ? 'liked' : 'not-liked'} absolute right-0`} >

                    {/* Like  */}
                    {cardStates[id] ? (
                      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.39" >
                        <path
                          fill="#ed1b24"
                          fill-rule="evenodd"
                          d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
                        />
                      </svg>
                    ) : (
                      <img className='w-8 h-8' src={heart} alt="basket" />
                    )}
                  </button>

                </div>
                {/* Data map */}
                <div className='space-y-2 mb-5 grow'>
                  <h2 className='font-bold mb-2'>{e.title}</h2>
                  <span className='cost'>{e.cost}</span>
                  <p className='font-normal'>{e.text}</p>
                  <p className='font-normal '>{e.text2}</p>
                </div>

                {/* installment payment */}
                <div className='flex justify-between '>
                  <button className='font-medium text-lg hover:text-brColor'>
                    Muddatli to'lov
                  </button>
                  {/* Basket img */}
                  <button onClick={() => {
                    addToCard(e)
                  }} className='basket hover:text-brColor'>
                    <svg width="32" height="32" viewBox="0 0 22 22" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
                      <path d="M21.0591 4.05197H7.06851C6.73335 4.05197 6.5357 4.2883 6.62163 4.63635L8.64117 11.5844C8.68413 11.7649 8.8646 11.8981 9.08804 11.8981H19.0869C19.3103 11.8981 19.4908 11.7649 19.5337 11.5844L21.506 4.63635C21.5834 4.40861 21.463 4.05197 21.0591 4.05197ZM18.7732 10.9571H9.44468L9.04077 9.56917H19.1771L18.7732 10.9571ZM19.4005 8.66683H8.75718L8.35757 7.27893H19.8044L19.4005 8.66683ZM20.0709 6.33791H8.09976L7.69585 4.95002H20.4791L20.0709 6.33791Z" fill="currentColor" stroke="#222222" strokeWidth="0.2" />
                      <path d="M4.60195 1.04414C4.55898 0.820703 4.37852 0.6875 4.15508 0.6875H0.472656V1.58555H3.78984L6.84062 13.8703C6.88359 14.0938 7.06406 14.227 7.2875 14.227H19.1254V13.2859H7.64844L4.60195 1.04414Z" fill="currentColor" stroke="#222222" strokeWidth="0.2" />
                      <path d="M17.742 15.6191H7.29199V16.5172H17.742V15.6191Z" fill="currentColor" stroke="#222222" strokeWidth="0.2" />
                      <path d="M17.2 17.7246C16.2117 17.7246 15.4082 18.5324 15.4082 19.5164C15.4082 20.5047 16.216 21.3082 17.2 21.3082C18.184 21.3082 18.9918 20.5004 18.9918 19.5164C18.9961 18.5324 18.1883 17.7246 17.2 17.7246ZM17.2 20.3715C16.7531 20.3715 16.3492 19.9676 16.3492 19.5207C16.3492 19.0738 16.7059 18.6699 17.2 18.6699C17.6941 18.6699 18.0508 19.0738 18.0508 19.5207C18.0551 19.9676 17.6512 20.3715 17.2 20.3715Z" fill="currentColor" stroke="#222222" strokeWidth="0.2" />
                      <path d="M8.50371 17.7246C7.51543 17.7246 6.71191 18.5324 6.71191 19.5164C6.71191 20.5047 7.51973 21.3082 8.50371 21.3082C9.4877 21.3082 10.2955 20.5004 10.2955 19.5164C10.2955 18.5324 9.4877 17.7246 8.50371 17.7246ZM8.50371 20.3715C8.05684 20.3715 7.65293 19.9676 7.65293 19.5207C7.65293 19.0738 8.00957 18.6699 8.50371 18.6699C8.95059 18.6699 9.35449 19.0738 9.35449 19.5207C9.35449 19.9676 8.95059 20.3715 8.50371 20.3715Z" fill="currentColor" stroke="#222222" strokeWidth="0.2" />
                    </svg>

                  </button>
                </div>

              </div>
            </li>
          );
        })}
      </ul>

      <Swiper className='py-10 swi'
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        navigation={true}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,

      }}
      loop={true}

      >
        <SwiperSlide>
          <div className='brend-still'>
            <Link to='/'>
              <img className='brend' src={acer} alt="acer logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still '>
            <Link className='mx-auto' to='/'>
              <img className='brend mx-auto' src={apple} alt="apple logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
            <Link to='/'>
              <img className='brend ' src={artel} alt="artel logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
            <Link to='/'>
              <img className='brend' src={asus} alt="asus logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
            <Link to='/'>
              <img className='brend' src={kukmara} alt="kukmara logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
            <Link to='/'>
              <img className='brend' src={lenovo} alt="lenovo logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
            <Link to='/'>
              <img className='brend' src={samsung} alt="samsung logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
            <Link to='/'>
              <img className='brend' src={sony} alt="sony logo image" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
          <Link to='/'>
            <img className='brend' src={intex} alt="itex logo image" />
          </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='brend-still'>
          <Link to='/'>
            <img className='brend' src={xiomi} alt="xiomi logo image" />
          </Link>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default MixedData;
