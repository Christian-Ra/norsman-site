import "./HomePage.scss";
import GalleryCard from "../gallery/GalleryCard";
import { Projects, Collections } from "../../ProjectList";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../../Graphics/Norsman-Logo-2021-B-no-background-01.png";
import landingImage1 from "../../Project_placeholders_photos/Exterior1.jpg";
import landingImage2 from "../../Project_placeholders_photos/DSC_0116.jpg";
import landingImage3 from "../../Project_placeholders_photos/New+City-75.jpg";
import landingImage4 from "../../Project_placeholders_photos/07+Potomac.jpg";
import CollectionCard from "../gallery/CollectionCard";

export default function HomePage() {
  const { state } = useLocation();
  const { targetId } = state || {};
  const landingGallery = [
    landingImage1,
    landingImage2,
    landingImage3,
    landingImage4,
  ];
  const [index, setIndex] = useState(Math.floor(Math.random() * 4));
  const timeoutRef = useRef(null);
  const delayMiliseconds = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      async () => {
        setIndex((prevIndex) =>
          prevIndex === landingGallery.length - 1 ? 0 : prevIndex + 1
        );
      },

      delayMiliseconds
    );
    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // console.log("state: ", state);
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
    return;
  }, [targetId]);

  const landingImageStyle = {
    backgroundImage: `url(${landingGallery[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    boxShadow: "inset 0 0 0 100vmax rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div
        key={index}
        exit={{ opacity: 0 }}
        className="main-content"
        id="landing"
      >
        <div
          className="hero-content"
          // key={index}
          style={landingImageStyle}
        >
          {/* <motion.div
            key={index}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            fade={fade}
            className="overlay-black"
            ></motion.div> */}
          <img src={logo} alt="norsman Architect Led Design Build"></img>
        </div>
      </motion.div>
      <section className="cta-info">
        <div className="cta-content">
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
          <div key={p.id}>
            <GalleryCard project={p} />
          </div>
        ))}
        {Collections.map((c) => (
          <div key={c.type}>
            <CollectionCard collection={c} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
