import "./Accordion.scss";
import { useState } from "react";
import aboutData from "../about/AboutText";
import { designData } from "../about/AboutText";
import { teamInfo } from "../about/AboutText";
import AccordionItem from "./AccordionItem";
import AccordionItemDesign from "./AccordionItemDesign";
import AccordionProfile from "./AccordionProfile";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {aboutData.map((item, index) => (
        <AccordionItem
          key={index}
          heading={item.heading}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
      <AccordionItemDesign
      heading={designData.heading}
      content={designData.content}
      subPages={designData.subPages}
      isOpen={activeIndex === 2}
      onClick={() => handleItemClick(2)}
       />
      <AccordionProfile
        heading={"Project Team"}
        content={teamInfo}
        isOpen={activeIndex === 3}
        onClick={() => handleItemClick(3)}
      />
    </div>
  );
};

export default Accordion;
