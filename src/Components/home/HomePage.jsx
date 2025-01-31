import "./HomePage.scss";
import GalleryCard from "../gallery/GalleryCard";
import { Projects, Collections } from "../../ProjectList";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

import quoteImage from "../../Graphics/landing-staircase.png";
import logo from "../../Graphics/Norsman Logo 2024 Transparent.png";

import landingImage1 from "../../Landing_photos/Landing-01.jpg"; //TODO: Lower the focus point, logo sits above window
import landingImage2 from "../../Landing_photos/Landing-02.jpg";
import landingImage3 from "../../Landing_photos/Landing-03.jpg";
import landingImage4 from "../../Landing_photos/Landing-04.jpg";
import landingImage5 from "../../Landing_photos/Landing-05.jpg"; //TODO: Lower the focus point, logo sits above window
import landingImage6 from "../../Landing_photos/Landing-06.jpg";
import landingImage7 from "../../Landing_photos/Landing-07.png";
import landingImage8 from "../../Landing_photos/Landing-08.jpg";
import landingImage9 from "../../Landing_photos/Landing-09.jpg";
import landingImage10 from "../../Landing_photos/Landing-10.jpg";
import landingImage11 from "../../Landing_photos/Landing-11.jpg";
import landingImage12 from "../../Landing_photos/Landing-12.jpg";
import landingImage13 from "../../Landing_photos/Landing-13.jpg";
import landingImage14 from "../../Landing_photos/Landing-14.jpg";
import landingImage15 from "../../Landing_photos/Landing-15.jpg";
import landingImage16 from "../../Landing_photos/Landing-16.png";

import CollectionCard from "../gallery/CollectionCard";
import LandingSwiper from "../swiper/LandingSwiper";

export default function HomePage() {
  const { state } = useLocation();
  const { targetId } = state || {};
  const landingGallery = [
    landingImage1,
    landingImage2,
    landingImage3,
    landingImage4,
    landingImage5,
    landingImage6,
    landingImage7,
    landingImage8,
    landingImage9,
    landingImage10,
    landingImage11,
    landingImage12,
    landingImage13,
    landingImage14,
    landingImage15,
    landingImage16,
  ];
  // const [index, setIndex] = useState(Math.floor(Math.random() * 4));
  // const timeoutRef = useRef(null);
  // const delayMiliseconds = 5000;

  // const resetTimeout = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // };

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     async () => {
  //       setIndex((prevIndex) =>
  //         prevIndex === landingGallery.length - 1 ? 0 : prevIndex + 1
  //       );
  //     },

  //     delayMiliseconds
  //   );
  //   return () => {
  //     resetTimeout();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [index]);

  // console.log("state: ", state);
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
            src={logo}
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
          <Link to="/norsman-site/about">
            <h1 className="cta">
              We are an architectural studio that chooses to build. Uniquely
              positioned as an Architect-Led Design Build Practice in Chicago,
              our strong portfolio of diverse architectural work is complemented
              by a real understanding of the construction process. This
              streamlined process creates a unified process to design and
              construction, enabling greater budget control, creative freedom
              and the positive realization of our client’s vision. As such, our
              collaborations continue to be as unique as our clients’ needs
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
