import React from "react";
import "./Contact.scss"

export default function Contact () {

    return (

        <div class="contact-page">
    <div class="form-container">
        <form>
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
        </form>
    </div>
</div>
    )

}