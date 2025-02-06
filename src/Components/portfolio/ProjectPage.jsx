import "./ProjectPage.scss";
import CenteredSwiper from "../swiper/CenteredSwiper";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import { useEffect, useState } from "react";
import ProjectDescription from "../description/ProjectDescription";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../../ErrorPage";
import LoadingPage from "../common/LoadingPage";
import { projects } from "../../ProjectList";

export default function ProjectPage() {
  const WORDPRESS_MEDIA_API =
    "https://norsmanarchitects.com/wp-json/wp/v2/media";
  // const match = useMatch("/norsman-site/projects/:title");
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  // const currentProject = projects.find(
  //   (project) => project.slug === projectSlug
  // );
  // const location = useLocation();
  // const [currentProject, setCurrentProject] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(null);
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === projectSlug
  );
  const currentProject = projects[currentProjectIndex];
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetch happening ");
    console.log("URL changed. Finding project for slug:", projectSlug);
    // const index = projects.findIndex((project) => project.slug === projectSlug);
    // if (index !== -1) {
    //   setCurrentProject(projects[index]);
    //   setCurrentIndex(index);
    // } else {
    //   setCurrentProject(null);
    // }
    if (!currentProject) return;
    const fetchImages = async () => {
      try {
        console.log(
          `Fetching images for project: ${currentProject.title} (${currentProject.slug})`
        );

        const response = await fetch(
          `${WORDPRESS_MEDIA_API}?include=${currentProject.photoIDs.join(
            ","
          )}&per_page=50`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          // Sort images based on their order in project.imageIDs
          console.log("fires if true");
          const sortedImages = data.sort(
            (a, b) =>
              currentProject.photoIDs.indexOf(a.id) -
              currentProject.photoIDs.indexOf(b.id)
          );

          setImages(sortedImages.map((item) => item.source_url));
        } else {
          console.warn("No images found for project:", currentProject.slug);
          setImages([]);
        }
      } catch (err) {
        console.error("Error fetching images:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [projectSlug]);

  const nextProject = projects[(currentProjectIndex + 1) % projects.length]; // Loops back to first
  const prevProject =
    projects[(currentProjectIndex - 1 + projects.length) % projects.length]; // Loops back to last

  if (!currentProject) {
    return <ErrorPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  console.log(images);
  return (
    <motion.div exit={{ opacity: 0 }} style={{ minHeight: "100vh" }}>
      <section className="page-container">
        <CenteredSwiper photos={images} videos={currentProject.videos} />
        <div className="scroll-container">
          {prevProject && (
            <p onClick={() => navigate(`/projects/${prevProject.slug}`)}>
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
            <p onClick={() => navigate(`/projects/${nextProject.slug}`)}>
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
