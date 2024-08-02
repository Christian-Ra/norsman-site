import "./HomePage.scss";
import GalleryCard from "../gallery/GalleryCard";
import { Projects, Collections } from "../../ProjectList";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import quoteImage from "../../Graphics/landing-staircase.jpg";
import logo from "../../Graphics/Norsman-Logo-2021-B-no-background-01.png";
import landingImage1 from "../../Project_placeholders_photos/Exterior1.jpg";
import landingImage2 from "../../Project_placeholders_photos/DSC_0116.jpg";
import landingImage3 from "../../Project_placeholders_photos/New+City-75.jpg";
import landingImage4 from "../../Project_placeholders_photos/07+Potomac.jpg";
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
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div exit={{ opacity: 0 }} className="main-content" id="landing">
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
        <div className="cta-content landing-mask">
          <h1 className="cta">
            Norsman Architects seek innovative solutions for built environments.
            As a full service architectural practice, our projects present
            opportunities to explore new paradigms in housing and urban
            development; including mixed-use developments, environmentally
            responsive adaptive reuse, commercial and residential work.
          </h1>
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
