import "./HomePage.scss";
import GalleryCard from "../gallery/GalleryCard";
import { projects, collections } from "../../ProjectList";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import quoteImage from "../../Graphics/landing-staircase.png";
import logo from "../../Graphics/Norsman Logo 2024 Transparent.png";

import landingImage1 from "../../Landing_photos/Landing-01.jpg"; //TODO: Lower the focus point, logo sits above window
import landingImage2 from "../../Landing_photos/Landing-02.jpg";

import CollectionCard from "../gallery/CollectionCard";
import LandingSwiper from "../swiper/LandingSwiper";
const landingImages = [
  "../../Landing_photos/Landing-01.jpg",
  "../../Landing_photos/Landing-02.jpg",
];

export default function HomePage() {
  const { state } = useLocation();
  const { targetId } = state || {};
  const WORDPRESS_MEDIA_API =
    "https://norsmanarchitects.com/wp-json/wp/v2/media";
  const landingGallery = [landingImage1, landingImage2];
  const [coverImages, setCoverImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoverImages = async () => {
      try {
        const requests = projects.map((project) =>
          fetch(
            `${WORDPRESS_MEDIA_API}?include=${project.photoIDs[0]}&per_page=1`
          ).then((res) => res.json())
        );

        const results = await Promise.all(requests);

        const imagesMap = {};
        results.forEach((data, index) => {
          if (data.length > 0) {
            console.log("URL to store: " + data[0].source_url);
            imagesMap[projects[index].slug] = data[0].source_url;
          }
        });

        setCoverImages(imagesMap);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cover images:", error);
      }
    };

    fetchCoverImages();
  }, []);

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

  console.log("WHat is coverImages: " + JSON.stringify(coverImages));

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
          <h1 className="cta">
            <Link to="/about">
              We are an architectural studio that has chosen to build. Uniquely
              positioned as an Architect-Led Design Build Practice in Chicago,
              our portfolio of diverse architectural work is complemented by a
              real understanding of the construction process. This streamlined
              process creates a unified process to design and construction,
              enabling greater budget control, creative freedom and the positive
              realization of our client’s vision. As such, our collaborations
              continue to be as unique as our clients’ circumstances.
            </Link>
          </h1>
        </div>
      </section>
      <div className="project-display" id="project-gallery">
        {projects.map((p, index) => (
          <div className="project-tab" key={p.id}>
            {console.log("What am I storing here" + coverImages[index])}
            <GalleryCard project={p} coverImage={coverImages[p.slug]} />
          </div>
        ))}
        {/* {collections.map((c) => (
          <div className="project-tab" key={c.type}>
            <CollectionCard collection={c} />
          </div>
        ))} */}
      </div>
    </motion.div>
  );
}
