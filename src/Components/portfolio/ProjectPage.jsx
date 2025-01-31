import "./ProjectPage.scss";
// import Slideshow from "../Slideshow/Slideshow"

// import SwiperComponent from "../swiper/SwiperComponent"
// import SpaceBetweenSwiper from "../swiper/SpaceBetweenSwiper"
// import BlurredSwiper from "../swiper/BlurredSwiper"
import CenteredSwiper from "../swiper/CenteredSwiper";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";

import ProjectDescription from "../description/ProjectDescription";
import { useMatch } from "react-router-dom";

export default function ProjectPage({ projects }) {
  const match = useMatch("/norsman-site/projects/:title");

  const modifyLink = (str) => {
    return str.replaceAll(" ", "-").toLowerCase();
  };

  const project = match
    ? projects.find(
        (project) => modifyLink(project.title) === String(match.params.title)
      )
    : null;

  if (!project) {
    return <div>Error page has not loaded assets</div>;
  }
  return (
    <motion.div exit={{ opacity: 0 }}>
      <section>
        <CenteredSwiper photos={project.photos} videos={project.videos} />
        {/* <SpaceBetweenSwiper /> */}
        {/* <   SwiperComponent/> */}
        {/* <BlurredSwiper/> */}
        <div className="scroll-container">
          <ScrollLink
            to="description"
            smooth={true}
            duration={500}
            className="scroll-link hide-for-mobile"
          >
            Description {/* &#10549; */}
          </ScrollLink>
        </div>
      </section>
      <Element name="description">
        <section>
          <ProjectDescription
            title={project.title}
            subHeading={project.subHeading}
            description={project.description}
            credits={project.credits}
          />
        </section>
      </Element>
    </motion.div>
  );
}
