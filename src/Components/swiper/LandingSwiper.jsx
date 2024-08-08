import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./LandingSwiper.scss";

// import required modules
import { Autoplay, Navigation, EffectFade, Keyboard } from "swiper/modules";

export default function LandingSwiper({ landingImages }) {
  if (!landingImages) return null;

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Keyboard]}
        className="landingSwiper"
      >
        {landingImages.map((slide, index) => (
          <SwiperSlide className="landing-slide" key={index}>
            <img src={slide} alt={`Slide: ${index + 1}`}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
