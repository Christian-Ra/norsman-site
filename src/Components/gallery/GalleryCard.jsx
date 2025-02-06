import "./GalleryCard.scss";
import { Link } from "react-router-dom";

export default function GalleryCard({ project, coverImage }) {
  //   console.log("featured photos: ", project.photos);
  return (
    <Link to={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
      <div
        className="project-card"
        style={{ backgroundImage: `url(${coverImage})` }}
        loading="lazy"
        id={project.title}
      >
        <h2 className="card-text">{project.title}</h2>
        {/* <p className='card-text'>{projectSubheading}</p> */}
      </div>
    </Link>
  );
}
