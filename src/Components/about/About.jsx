import "./About.scss";
import React from "react";
// import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Accordion from "../Accordion/Accordion";
import pinupPhoto from "../../Graphics/pin-up photo.jpg";

export default function About() {
  // useEffect(() => {
  //   if (isOpen) {
  //     contentRef.current.style.maxHeight =
  //       contentRef.current.scrollHeight + "px";
  //   } else {
  //     contentRef.current.style.maxHeight = "0px";
  //   }
  // }, [isOpen]);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="about-container">
        <div className="about-text">
          <div className="section">
            <Accordion />
          </div>
        </div>
        <div className="about-images hide-for-mobile">
          <img
            style={{ width: "inherit", height: "inherit" }}
            src={pinupPhoto}
            alt="norsman architects office"
          ></img>
          <img
            style={{
              width: "inherit",
              height: "inherit",
            }}
            src={pinupPhoto}
            alt="norsman architects office"
          ></img>
          <img
            style={{ width: "inherit", height: "inherit" }}
            src={pinupPhoto}
            alt="norsman architects office"
          ></img>
        </div>
      </div>
      {/* <div className="project-team">
        <h1>Project Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada.
        </p>
      </div> */}
    </motion.div>
  );
}
