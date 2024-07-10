import "./HomePage.scss";
import GalleryCard from "../gallery/GalleryCard";
import { Projects } from "../../ProjectList";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../Graphics/Norsman_Logo_white.png";

export default function HomePage() {
  const { state } = useLocation();
  const { targetId } = state || {};
  console.log("state: ", state);
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
    return;
  }, [targetId]);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <section className="main-content" id="landing">
        <div className="hero-content">
          <img src={logo} alt="norsman Architect Led Design Build"></img>
          {/* <h1 className='company-name'>norsman</h1>
            <h2 className='subheading'>Architect Led Design Build</h2> */}
        </div>
      </section>
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
      <div className="portfolio-section" id="project1">
        <h1 className="project-title">Maria's</h1>
        <h2 className="project-subheading">Description</h2>
      </div>
      <div className="project-display" id="project-gallery">
        {Projects.map((p) => (
          <div key={p.id}>
            <GalleryCard project={p} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
