import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Bio from "../about/Bio";
import "./AccordionProfile.scss";

const AccordionProfile = ({ heading, content, isOpen, onClick }) => {
  const matches = useMediaQuery("(min-width:640px)");
  const [activeBio, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const contentHeight = useRef(null);

  return (
    <div className="wrapper">
      <button
        className={`heading-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <h1 className="heading-content">{heading}</h1>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>
      <div
        ref={contentHeight}
        className="content-container"
        style={
          isOpen
            ? matches
              ? { height: "1600px" }
              : { height: "2650px" }
            : { height: "0px" }
        }
      >
        {content.map((c, index) => (
          <Bio
            key={index}
            content={c}
            isBioOpen={activeBio === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionProfile;
