import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CenteredSwiper.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function CenteredSwiper({ photos, videos }) {
  // const images = [photo1, photo2, photo5, photo4, photo3]
  if (!photos) return null;

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {photos.map((src, index) => (
          <SwiperSlide className="centered-slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
        {videos &&
          videos.map((src, index) => (
            <SwiperSlide className="centered-slide" key={index}>
              <video
                src={src}
                alt={`Video Slide ${index + 1}`}
                preload="metadata"
                controls
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
