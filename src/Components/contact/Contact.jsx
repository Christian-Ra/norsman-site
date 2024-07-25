import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div exit={{ opacity: 0 }} className="contact-page">
      <div className="contact-container">
        <h1 style={{ cursor: "default" }}>Contact Us:</h1>
        <p>Phone: + 1-773-252-9448</p>
        <p>Email: info@norsmanarchitects.com</p>
        <a href="https://www.google.com/maps/place/Norsman+Architects/@41.9057449,-87.6718777,15z/data=!4m6!3m5!1s0x880fd3cd1635c079:0x3501684c8b0d8257!8m2!3d41.9057449!4d-87.6718777!16s%2Fg%2F11vy2gzhlj?entry=ttu">
          Address: 1317 N Wood St, Chicago, IL 60622
        </a>
      </div>
    </motion.div>
  );
}
