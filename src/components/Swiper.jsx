import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

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
        <Swiper className='py-10'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}

        >
            <Swiper>
                <SwiperSlide>
                    <img className='w-full  rounded-lg ' src={img} alt="maishiy texnikalar rasimi" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full  rounded-lg ' src={img2} alt="noutboklar rasimi" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full  rounded-lg ' src={img3} alt="qol soatlar rasimi" />
                </SwiperSlide>

                <span className='start' slot="container-start">Container Start</span>
                <span slot="container-end">Container End</span>
                <span slot="wrapper-start">Wrapper Start</span>
                <span slot="wrapper-end">Wrapper End</span>
            </Swiper>
        </Swiper>
    );
};