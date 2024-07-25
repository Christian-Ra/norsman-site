import { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./AccordionItem.scss";

const AccordionItem = ({ heading, content, isOpen, onClick }) => {
  //   console.log("content: ", content);
  const contentHeight = useRef();
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
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {content.map((c, index) => (
          <p key={index} className="content">
            {c}
            <br></br>
            <br></br>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AccordionItem;
