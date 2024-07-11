import "./Accordion.scss";
import { useState } from "react";
import aboutData from "../about/AboutText";
import AccordionItem from "./AccordionItem";

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
    </div>
  );
};

export default Accordion;
