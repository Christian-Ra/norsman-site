import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./AccordionItemDesign.scss";

const AccordionItemDesign = ({ heading, content, subPages, isOpen, onClick }) => {
  //   console.log("content: ", content);
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`heading-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <h1 className="heading-content">{heading}</h1>
        <IoIosArrowDown className={`arrow ${isOpen ? "active" : ""}`} />
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
        <p className="content">
          {content}
        </p>
        {subPages.map((subP, index) => (
          <div>
          <h1 key={index} className="heading-content">
            {subP.subHeading}
            <br></br>
            <br></br>
          </h1>
          {subP.subContent.map((c, index) => (
            <p key={index} className="content">
              {c}
              <br></br>
              <br></br>
            </p>
          ))}
        </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionItemDesign;
