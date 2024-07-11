import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div exit={{ opacity: 0 }} class="contact-page">
      <div class="contact-container">
        <h1>Contact Us:</h1>
        <p>Phone: + 1-773-252-9448</p>
        <p>Email: info@norsmanarchitects.com</p>
        <a href="https://www.google.com/maps/place/Norsman+Architects/@41.9057449,-87.6718777,15z/data=!4m6!3m5!1s0x880fd3cd1635c079:0x3501684c8b0d8257!8m2!3d41.9057449!4d-87.6718777!16s%2Fg%2F11vy2gzhlj?entry=ttu">
          Address: 1317 N Wood St, Chicago, IL 60622
        </a>
        {/* <form>
            <h2 class="form-heading">Business Inquiries</h2>
            <label for="business-name">Name/Company</label>
            <input type="text" id="business-name" name="business-name" required/>
            
            <label for="business-email">Email</label>
            <input type="email" placeholder="example@gmail.com" id="business-email" name="business-email" required/>
            
            <label for="business-message">Message</label>
            <textarea id="business-message" name="business-message" rows="5" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
        
        <form>
            <h2 class="form-heading">Employment Opportunities</h2>
            <label for="employment-name">Name</label>
            <input type="text" id="employment-name" name="employment-name" required/>
            
            <label for="employment-email">Email</label>
            <input type="email" placeholder="example@gmail.com" id="employment-email" name="employment-email" required/>
            
            <label for="employment-resume">Resume</label>
            <textarea id="employment-resume" name="employment-resume" rows="5" required></textarea>
            
            <button type="submit">Submit</button>
        </form> */}
      </div>
    </motion.div>
  );
}
