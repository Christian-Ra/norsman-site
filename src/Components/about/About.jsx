import "./About.scss";
import React from "react";
// import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Accordion from "../Accordion/Accordion";
import pinupPhoto from "../../Graphics/pin-up photo.jpg";
import aboutPhoto from "../../Graphics/Norsman Side Banner-01.png";

export default function About() {
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
            className="hide-for-mobile"
            style={{ height: "inherit" }}
            src={aboutPhoto}
            alt="norsman architects office"
          ></img>
        </div>
      </div>
    </motion.div>
  );
}
