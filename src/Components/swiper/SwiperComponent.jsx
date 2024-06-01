import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SwiperComponent.scss';


import photo1 from "../../Project_placeholders_photos/Bosworth+Deck-27.jpg";
import photo2 from "../../Project_placeholders_photos/Interior-18.jpg";
import photo3 from "../../Project_placeholders_photos/01+Ridge.jpg";
import photo4 from "../../Project_placeholders_photos/DSC_0013.jpg";
import photo5 from "../../Project_placeholders_photos/portrait-test.jpeg";

// import required modules
import { EffectCoverflow, Pagination, Keyboard } from 'swiper/modules';

export default function SwiperComponent() {
    const images = [
        photo1, photo2, photo3, photo5, photo4
    ]
    return (
        <>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            keyboard={{
                enabled: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Keyboard]}
            className="mySwiper"
          >
            {images.map((src, index) => (
            <SwiperSlide key={index} >
              <img src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
          </Swiper>
        </>
      );
}