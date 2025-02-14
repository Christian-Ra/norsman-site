import "./Collage.scss";
import CollageCard from "./CollageCard";
import { useMatch, useParams } from "react-router-dom";
import { Collections as collections } from "../../ProjectList";
import { motion } from "framer-motion";

const Collage = () => {
  const { collectionSlug } = useParams();
  const match = useMatch("/norsman-site/collections/:collectionSlug");
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
      {collection.photos.map((p, index) => (
        <div key={index}>
          <CollageCard image={p} />
        </div>
      ))}
    </motion.div>
  );
};

export default Collage;
