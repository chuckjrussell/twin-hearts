import React from 'react';

const ContactForm = () => {
    return (
        <form className="contact-form" action="https://formspree.io/twinheartsinc@gmail.com" method="POST" >
            <div className="input-field-group">
                <label htmlFor="name" name="name">Name</label>
                <input type="text" name="name" placeholder="Your Name"/>
            </div>
            <div className="input-field-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Your Email"/>
            </div>
            <div className="input-field-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" placeholder="Your Phone Number"/>
            </div>
            <div className="input-field-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="4" ></textarea>
            </div>
            
            <input type="submit" value="Submit" className="btn"/>
        </form>
    );
}

export default ContactForm;