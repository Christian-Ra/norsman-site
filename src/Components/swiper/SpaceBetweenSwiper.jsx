import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SpaceBetweenSwiper.scss";

import photo1 from "../../Project_placeholders_photos/Bosworth+Deck-27.jpg";
import photo2 from "../../Project_placeholders_photos/Interior-18.jpg";
import photo3 from "../../Project_placeholders_photos/01+Ridge.jpg";
// import required modules
import { Navigation } from "swiper/modules";

export default function SpaceBetweenSwiper() {
  const images = [photo1, photo2, photo3];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
