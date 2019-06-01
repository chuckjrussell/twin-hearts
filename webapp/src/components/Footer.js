import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">The Team</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/groups/1648669365212347"><i className="ion-social-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
            
            <div className="row">
                <p>
                    Copyright &copy; 2019 Twin Hearts, Inc.  All rights reserved.
                </p>
            </div>

        </footer>
    )
};

export default Footer;