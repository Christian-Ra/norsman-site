import "./Collage.scss";
import CollageCard from "./CollageCard";
import { useMatch, useParams } from "react-router-dom";
import { Collections as collections } from "../../ProjectList";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Collage = () => {
  const { collectionSlug } = useParams();
  const match = useMatch("/collections/:collectionSlug");
  const collection = match
    ? collections.find(
        (collection) =>
          collection.slug === collectionSlug
      )
    : null;
  if (!collection) {
    return <div>Error page has not loaded assets</div>;
  }
  return (
    <motion.div exit={{ opacity: 0 }} className="collage-display">
      <Helmet>
        <title>{collection.type} - Norsman Projects</title>
        <link
          rel="canonical"
          href={`https://norsmanarchitects.com/collections/${collection.type}`}
        />
        <meta
          name="description"
          content="Norsman Architects photo collections of current and previous projects."
        />
      </Helmet>
      {collection.photos.map((p, index) => (
        <div key={index}>
          <CollageCard image={p} />
        </div>
      ))}
    </motion.div>
  );
};

export default Collage;
