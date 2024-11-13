import "./HomePage.scss";
import GalleryCard from "../gallery/GalleryCard";
import { Projects, Collections } from "../../ProjectList";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import quoteImage from "../../Graphics/landing-staircase.jpg";
import logo from "../../Graphics/Norsman Logo 2024 Transparent.png";
import landingImage1 from "../../Landing_photos/Leavitt3-01.jpg"; //TODO: Lower the focus point, logo sits above window
import landingImage2 from "../../Landing_photos/Marion-Court-House-06.jpg";
import landingImage3 from "../../Landing_photos/Maria_s-04.jpg";
import landingImage4 from "../../Landing_photos/New-City-Moving-02.jpg";
import landingImage5 from "../../Landing_photos/Potomac-01.jpg"; //TODO: Lower the focus point, logo sits above window
import landingImage6 from "../../Landing_photos/St-Croix-Falls-01.jpg";
// import landingImage1 from "../../Project_placeholders_photos/Exterior1.jpg";
// import landingImage2 from "../../Project_placeholders_photos/DSC_0116.jpg";
// import landingImage3 from "../../Project_placeholders_photos/New+City-75.jpg";
// import landingImage4 from "../../Project_placeholders_photos/07+Potomac.jpg";
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
              Our firm looks to stitch their work into the urban fabric, provide
              for sustainable long reaching solutions, and provide dynamic
              spatial experiences that extend beyond the building’s interior
              into the urban landscape beyond.
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
