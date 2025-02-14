import "./CollectionCard.scss";
import { Link } from "react-router-dom";

export default function CollectionCard({ collection }) {
  return (
    <Link
      to={`/norsman-site/collections/${collection.type
        .replaceAll(" ", "-")
        .toLowerCase()}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className="project-card"
        style={{ backgroundImage: `url(${collection.photos[0]})` }}
        loading="lazy"
      >
        <h2 className="card-text">{collection.type}</h2>
      </div>
    </Link>
  );
}
