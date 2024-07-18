import "./Slideshow.scss";
import React from "react";
import photo1 from "../../Project_placeholders_photos/Bosworth+Deck-27.jpg";
import photo2 from "../../Project_placeholders_photos/Interior-18.jpg";
import photo3 from "../../Project_placeholders_photos/01+Ridge.jpg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState, useRef, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const images = [photo1, photo2, photo3];
// const delay = 5000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  function showNextImage() {
    setIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  // const timeoutRef = useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {images.map((url) => (
          <img
            src={url}
            className="slide"
            style={{ translate: `${-index * 100}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: "0" }}
      >
        <KeyboardArrowLeftIcon />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: "0" }}
      >
        <KeyboardArrowRightIcon />
      </button>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
