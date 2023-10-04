import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Imgs
import img from '../assets/images/swiper-image.png'
import img2 from '../assets/images/swper-image2.png'
import img3 from '../assets/images/swiper-image3.png'

export default () => {
  return (
    <Swiper className='py-5 '
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
    
    >
      <div className=''>
          <SwiperSlide>
            <img className='w-full rounded-lg ' src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full rounded-lg ' src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full rounded-lg ' src={img3} alt="" />
          </SwiperSlide>
     
      </div>
    </Swiper>
  );
};