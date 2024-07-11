import "./Collage.scss";
import CollageCard from "./CollageCard";
import photo1 from "../../Project_placeholders_photos/DSC_0106.jpg";
import photo2 from "../../Project_placeholders_photos/DSC_0116.jpg";
import photo3 from "../../Project_placeholders_photos/Exterior1.jpg";
import photo4 from "../../Project_placeholders_photos/Nonnina+Dining-47.jpg";
import photo5 from "../../Project_placeholders_photos/Village+Park+of+Hoffman+Estates+008.jpg";
import photo6 from "../../Project_placeholders_photos/New+City-75.jpg";
import photo7 from "../../Project_placeholders_photos/07+Potomac.jpg";
import photo8 from "../../Project_placeholders_photos/06+Leavitt.jpg";
import photo9 from "../../Project_placeholders_photos/Feb102011_9690_1_tonemapped.jpg";

import { motion } from "framer-motion";

const photoSet = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

const Collage = ({ photos }) => {
  return (
    <motion.div exit={{ opacity: 0 }} className="collage-display">
      {photoSet.map((p) => (
        <div>
          <CollageCard image={p} />
        </div>
      ))}
    </motion.div>
  );
};

export default Collage;
