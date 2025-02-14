import "./ProjectPage.scss";
import CenteredSwiper from "../swiper/CenteredSwiper";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
// import { useEffect, useState } from "react";
import ProjectDescription from "../description/ProjectDescription";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../../ErrorPage";
import { Projects as projects } from "../../ProjectList";

export default function ProjectPage() {
  // const match = useMatch("/norsman-site/projects/:title");
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  // const [currentProject, setCurrentProject] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(null);
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === projectSlug
  );
  const currentProject = projects[currentProjectIndex];
  // useEffect(() => {
  //   console.log("URL changed. Finding project for slug:", projectSlug);
  //   const index = projects.findIndex((project) => project.slug === projectSlug);
  //   if (index !== -1) {
  //     setCurrentProject(projects[index]);
  //     setCurrentIndex(index);
  //   } else {
  //     setCurrentProject(null);
  //   }
  // }, [projectSlug]); // Runs when `projectSlug` changes
  // const currentIndex = projects.findIndex(
  //   (project) => project.slug === projectSlug
  // );
  // const currentProject = projects[currentIndex];
  // console.log(currentProject.title);

  // const modifyLink = (str) => {
  //   return str.replaceAll(" ", "-").toLowerCase();
  // };

  const nextProject = projects[(currentProjectIndex + 1) % projects.length]; // Loops back to first
  const prevProject =
    projects[(currentProjectIndex - 1 + projects.length) % projects.length]; // Loops back to last

  // const project = match
  //   ? projects.find(
  //       (project) => modifyLink(project.title) === String(match.params.title)
  //     )
  //   : null;

  if (!currentProject) {
    return <ErrorPage />;
  }
  return (
    <motion.div exit={{ opacity: 0 }}>
      <section>
        <CenteredSwiper
          photos={currentProject.photos}
          videos={currentProject.videos}
        />
        <div className="scroll-container">
          {prevProject && (
            <p
              onClick={() =>
                navigate(`/normsan-site/projects/${prevProject.slug}`)
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
                navigate(`/norsman-site/projects/${nextProject.slug}`)
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
