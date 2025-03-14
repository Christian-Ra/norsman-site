import "./GalleryCard.scss";
import { Link } from "react-router-dom";

export default function GalleryCard({ project }) {
  //   console.log("featured photos: ", project.photos);
  return (
    <Link
      to={`/projects/${project.slug
        .replaceAll(" ", "-")
        .toLowerCase()}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className="project-card"
        style={{ backgroundImage: `url(${project.coverPhoto})` }}
        loading="lazy"
        id={project.title}
      >
        <h2 className="card-text">{project.title}</h2>
        {/* <img className="card-image" src={project.coverPhoto} alt={`${project.title} cover`}></img> */}
        {/* <p className='card-text'>{projectSubheading}</p> */}
      </div>
    </Link>
  );
}
