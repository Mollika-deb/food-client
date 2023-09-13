import React from 'react';
import './slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';




import img1 from '../../../../images/trend3.jpg';
import img2 from '../../../../images/about4.jpg';
import img3 from '../../../../images/trend5.webp';
import img4 from '../../../../images/trend6.jpg';
import img5 from '../../../../images/trend7.webp';
import img6 from '../../../../images/about1.jpg';






const Slider = () => {
    return (
       <div className='w-[80vw] mx-auto lg:mt-32 mt-16'>
        <div>
            <h2 className='text-3xl lg:text-4xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display ',   }}>See Our Trending Items</h2>
            <h2 className='text-2xl lg:text-3xl text-center font-semibold pt-3 pb-5 text-green-700' style={{ fontFamily: 'Playfair Display', color:'#7A942E'  }}>Our Services</h2>
           
        </div >
        
     

      <Swiper
//                

slidesPerView={1}
spaceBetween={20}
centeredSlides={true}
autoplay={{
  delay: 2000,
  disableOnInteraction: false,
}}
loop={true}
breakpoints={{
  640: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
}}
modules={[Autoplay, Pagination, Navigation]}

            >

             

<SwiperSlide>
          <img src={img1} alt="slide_image" className='h-[40vh] md: lg:w-[30vw] md:w-[40vw] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image"  className='h-[40vh] lg:w-[30vw] md:w-[40vw] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" className='h-[40vh] lg:w-[30vw] md:w-[40vw] w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image" className='h-[40vh] lg:w-[30vw] md:w-[40vw] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide_image" className='h-[40vh] lg:w-[30vw] md:w-[40vw] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image"  className='h-[40vh] lg:w-[30vw] md:w-[40vw] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slide_image" className='h-[40vh] lg:w-[30vw] md:w-[40vw] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image" className='h-[40vh] lg:w-[30vw] md:w-[40vw] w-full'/>
        </SwiperSlide>
        


            </Swiper >
       </div>
    );
};

export default Slider;