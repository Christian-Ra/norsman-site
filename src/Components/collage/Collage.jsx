import "./Collage.scss";
import CollageCard from "./CollageCard";
import { useMatch } from "react-router-dom";

import { motion } from "framer-motion";

const Collage = ({ collections }) => {
  const match = useMatch("/normsan-site/collections/:type");
  const modifyLink = (str) => {
    return str.replaceAll(" ", "-").toLowerCase();
  };
  const collection = match
    ? collections.find(
        (collection) =>
          modifyLink(collection.type) === String(match.params.type)
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
