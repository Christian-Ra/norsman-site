import "./HomePage.scss";
import GalleryCard from "../gallery/GalleryCard";
import { Projects, Collections } from "../../ProjectList";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";

import quoteImage from "../../Graphics/landing-staircase.webp";
import logo from "../../Graphics/Norsman Logo 2024 Transparent.png";
import mobileLogo from "../../Graphics/Norsman-Logo-Mobile.png"

import landingImage1 from "../../Landing_photos/Landing-01-desktop.webp"; //TODO: Lower the focus point, logo sits above window
import landingImage2 from "../../Landing_photos/Landing-02-desktop.webp";
import landingImage3 from "../../Landing_photos/Landing-03-desktop.webp";
import landingImage4 from "../../Landing_photos/Landing-04-desktop.webp";
import landingImage5 from "../../Landing_photos/Landing-05-desktop.webp"; //TODO: Lower the focus point, logo sits above window
import landingImage6 from "../../Landing_photos/Landing-06-desktop.webp";
import landingImage7 from "../../Landing_photos/Landing-07-desktop.webp";
import landingImage8 from "../../Landing_photos/Landing-08-desktop.webp";
import landingImage9 from "../../Landing_photos/Landing-09-desktop.webp";
import landingImage10 from "../../Landing_photos/Landing-10-desktop.webp";
import landingImage11 from "../../Landing_photos/Landing-11-desktop.webp";
import landingImage12 from "../../Landing_photos/Landing-12-desktop.webp";
import landingImage13 from "../../Landing_photos/Landing-13-desktop.webp";
import landingImage14 from "../../Landing_photos/Landing-14-desktop.webp";
import landingImage15 from "../../Landing_photos/Landing-15-desktop.webp";
import landingImage16 from "../../Landing_photos/Landing-16-desktop.webp";
import landingMobile1 from "../../Landing_photos/Landing-01-mobile.webp"
import landingMobile2 from "../../Landing_photos/Landing-02-mobile.webp"
import landingMobile3 from "../../Landing_photos/Landing-03-mobile.webp";
import landingMobile4 from "../../Landing_photos/Landing-04-mobile.webp";
import landingMobile5 from "../../Landing_photos/Landing-05-mobile.webp";
import landingMobile6 from "../../Landing_photos/Landing-06-mobile.webp";
import landingMobile7 from "../../Landing_photos/Landing-07-mobile.webp";
import landingMobile8 from "../../Landing_photos/Landing-08-mobile.webp";
import landingMobile9 from "../../Landing_photos/Landing-09-mobile.webp";
import landingMobile10 from "../../Landing_photos/Landing-10-mobile.webp";
import landingMobile11 from "../../Landing_photos/Landing-11-mobile.webp";
import landingMobile12 from "../../Landing_photos/Landing-12-mobile.webp";
import landingMobile13 from "../../Landing_photos/Landing-13-mobile.webp";
import landingMobile14 from "../../Landing_photos/Landing-14-mobile.webp";
import landingMobile15 from "../../Landing_photos/Landing-15-mobile.webp";
import landingMobile16 from "../../Landing_photos/Landing-16-mobile.webp";

import CollectionCard from "../gallery/CollectionCard";
import LandingSwiper from "../swiper/LandingSwiper";
// const landingImages = [
//   "../../Landing_photos/Landing-01.jpg",
//   "../../Landing_photos/Landing-02.jpg",
//   "../../Landing_photos/Landing-03.jpg",
//   "../../Landing_photos/Landing-04.jpg",
//   "../../Landing_photos/Landing-05.jpg",
//   "../../Landing_photos/Landing-06.jpg",
//   "../../Landing_photos/Landing-07.png",
//   "../../Landing_photos/Landing-08.jpg",
//   "../../Landing_photos/Landing-09.jpg",
//   "../../Landing_photos/Landing-10.jpg",
//   "../../Landing_photos/Landing-11.jpg",
//   "../../Landing_photos/Landing-12.jpg",
//   "../../Landing_photos/Landing-13.jpg",
//   "../../Landing_photos/Landing-14.jpg",
//   "../../Landing_photos/Landing-15.jpg",
//   "../../Landing_photos/Landing-16.png",
// ];

export default function HomePage() {
  const { state } = useLocation();
  const { targetId } = state || {};
  const landingGallery = useMemo(() => 
    [
      {desktop: landingImage1, mobile: landingMobile1},
      {desktop: landingImage2, mobile: landingMobile2},
      {desktop: landingImage3, mobile: landingMobile3},
      {desktop: landingImage4, mobile: landingMobile4},
      {desktop: landingImage5, mobile: landingMobile5},
      {desktop: landingImage6, mobile: landingMobile6},
      {desktop: landingImage7, mobile: landingMobile7},
      {desktop: landingImage8, mobile: landingMobile8},
      {desktop: landingImage9, mobile: landingMobile9},
      {desktop: landingImage10, mobile: landingMobile10},
      {desktop: landingImage11, mobile: landingMobile11},
      {desktop: landingImage12, mobile: landingMobile12},
      {desktop: landingImage13, mobile: landingMobile13},
      {desktop: landingImage14, mobile: landingMobile14},
      {desktop: landingImage15, mobile: landingMobile15},
      {desktop: landingImage16, mobile: landingMobile16},
    //   landingImage2,
    //   landingImage3,
    //   landingImage4,
    //   landingImage5,
    //   landingImage6,
    //   landingImage7,
    //   landingImage8,
    //   landingImage9,
    // landingImage10,
    // landingImage11,
    // landingImage12,
    // landingImage13,
    // landingImage14,
    // landingImage15,
    // landingImage16,
  ], []
  )

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
    return;
  }, [targetId]);

  const landingImageStyle = {
    backgroundSize: "cover",
    // backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
  };

  return (
    <motion.div exit={{ opacity: 0 }} id="container" className="scroll-snap">
      <div
        exit={{ opacity: 0 }}
        className="main-content scroll-snap"
        id="landing"
      >
        <div
          className="hero-content"
          // key={index}
          style={landingImageStyle}
        >
          <div className="landing-mask"></div>
          <img
            className="landing-logo"
            // src={logo}
            srcSet={`
              ${logo} 1920w,
            ${mobileLogo} 800w,`}
            alt="norsman Architect Led Design Build"
          ></img>
          <LandingSwiper
            landingImages={landingGallery}
            style={landingImageStyle}
          ></LandingSwiper>
        </div>
      </div>
      <section
        style={{
          ...landingImageStyle,
          backgroundImage: `url(${quoteImage})`,
        }}
        className="cta-info"
      >
        <div className="cta-content landing-mask" key={"cta"}>
            <Link to="/about">
          <h1 className="cta" key={"cta1"}>
              We are an architectural studio that has chosen to build. Uniquely
              positioned as an Architect-Led Design Build Practice in Chicago,
              our portfolio of diverse architectural work is complemented by a
              real understanding of the construction process. This streamlined
              process creates a unified process to design and construction,
              enabling greater budget control, creative freedom and the positive
              realization of our client’s vision. As such, our collaborations
              continue to be as unique as our clients’ circumstances.
          </h1>
            </Link>
        </div>
      </section>
      <div className="project-display" id="project-gallery">
        {Projects.map((p) => (
          <div className="project-tab" key={p.id}>
            <GalleryCard project={p} />
          </div>
        ))}
        {Collections.map((c) => (
          <div className="project-tab" key={c.type}>
            <CollectionCard collection={c} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
