import "./Collage.scss";
import CollageCard from "./CollageCard";
import { useMatch } from "react-router-dom";

import { motion } from "framer-motion";

const Collage = ({ collections }) => {
  const match = useMatch("/norsman-site/collections/:type");
  const collection = match
    ? collections.find(
        (collection) => collection.type === String(match.params.type)
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
