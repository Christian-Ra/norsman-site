import "./ProjectPage.scss";
import CenteredSwiper from "../swiper/CenteredSwiper";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
// import { useEffect, useState } from "react";
import ProjectDescription from "../description/ProjectDescription";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../../ErrorPage";
import { Projects as projects } from "../../ProjectList";
import { Helmet } from "react-helmet-async";

export default function ProjectPage() {
  // const match = useMatch("/norsman-site/projects/:title");
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === projectSlug
  );
  const currentProject = projects[currentProjectIndex];

  const nextProject = projects[(currentProjectIndex + 1) % projects.length]; // Loops back to first
  const prevProject =
    projects[(currentProjectIndex - 1 + projects.length) % projects.length]; // Loops back to last

  if (!currentProject) {
    return <ErrorPage />;
  }
  return (
    <motion.div className="project-page-container" exit={{ opacity: 0 }}>
      <Helmet>
        <title>{currentProject.title} - Norsman Projects</title>
        <link rel="canonical" href={`https://norsmanarchitects.com/projects/${currentProject.title}`} />
        <meta name="description" content={currentProject.subHeading} />
      </Helmet>
      <section>
        <CenteredSwiper
          photos={currentProject.photos}
          videos={currentProject.videos}
        />
        <div className="scroll-container">
          {prevProject && (
            <p
              onClick={() =>
                navigate(`/projects/${prevProject.slug}`)
              }
            >
              Previous Project
            </p>
          )}
          <ScrollLink
            to="description"
            smooth={true}
            duration={500}
            className="scroll-link hide-for-mobile"
          >
            Description {/* &#10549; */}
          </ScrollLink>

          {nextProject && (
            <p
              onClick={() =>
                navigate(`/projects/${nextProject.slug}`)
              }
            >
              Next Project
            </p>
          )}
        </div>
      </section>
      <Element name="description">
        <section>
          <ProjectDescription
            title={currentProject.title}
            subHeading={currentProject.subHeading}
            description={currentProject.description}
            credits={currentProject.credits}
          />
        </section>
      </Element>
    </motion.div>
  );
}
