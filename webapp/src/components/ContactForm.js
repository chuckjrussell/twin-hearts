import React from 'react';

const ContactForm = () => {
    return (
        <form className="contact-form">
            <div className="input-field-group">
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="Your Name"/>
            </div>
            <div className="input-field-group">
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Your Email"/>
            </div>
            <div className="input-field-group">
                <label for="phone">Phone Number</label>
                <input type="text" name="phone" placeholder="Your Phone Number"/>
            </div>
            <div className="input-field-group">
                <label for="message">Message</label>
                <textarea name="message" rows="4"></textarea>
            </div>
            
            <input type="button" value="Submit"/>
        </form>
    );
}

export default ContactForm;