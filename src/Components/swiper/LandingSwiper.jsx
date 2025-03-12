import React, { useRef, useEffect } from "react";
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

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function LandingSwiper({ landingImages }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperRef.current.swiper.autoplay.start();
        } else {
          swiperRef.current.swiper.autoplay.stop();
        }
      },
      { threshold: 0.1 }
    );

    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }

    return () => {
      if (swiperRef.current) {
        observer.unobserve(swiperRef.current);
      }
    };
  }, []);

  if (!landingImages) return null;

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        loop={true}
        initialSlide={randomInt(landingImages.length)}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Keyboard]}
        className="landingSwiper"
      >
        {landingImages.map((slide, index) => (
          <SwiperSlide className="landing-slide" key={index}>
            <img srcSet={`
            ${slide.desktop} 1920w,
            ${slide.mobile} 800w,
              `} alt={`Slide: ${index + 1}`} loading="lazy"></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
