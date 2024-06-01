import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import './CenteredSwiper.scss';

import photo1 from "../../Project_placeholders_photos/Bosworth+Deck-27.jpg";
import photo2 from "../../Project_placeholders_photos/Interior-18.jpg";
import photo3 from "../../Project_placeholders_photos/01+Ridge.jpg";
import photo4 from "../../Project_placeholders_photos/DSC_0013.jpg";
import photo5 from "../../Project_placeholders_photos/portrait-test.jpeg";

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function CenteredSwiper () {
    const images = [photo1, photo2, photo5, photo4, photo3]

    return (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            FreeMode={true}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
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