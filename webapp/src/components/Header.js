import React, {useEffect, useState} from 'react';
import './Header.css';

import mainLogo from '../img/Logo-image.png';
import logoBlackText from '../img/logo-text-black.png';
import $ from 'jquery';
import classNames from 'classnames';

const Header = () => {

    useEffect(() => {
        /* Navigation Scroll */
        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                // eslint-disable-next-line
                window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                        }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); 
                            $target.focus();
                        }
                    });
                }
            }
        });
    
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    var menuClasses = classNames({
        'main-nav': true,
        'main-nav-open': isMenuOpen
    })
    
    return (
        <header>
            <nav>
                <div className="row nav-wrapper">
                    <button className="mobile-nav-icon js--nav-icon" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                        {isMenuOpen ? (<i className="ion-close-round"></i>) : (<i className="ion-navicon-round"></i>)}
                    </button>

                    <ul className={menuClasses}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">The Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row header-row">
                    <div className="col-md-6 col-sm-12 header-left">
                        <div className="main-logo-container">
                            <img src={mainLogo} className="main-logo" alt="main-twin-hearts-logo"></img>

                            <div className="logo-container">
                                <img className="header-logo-image" src={logoBlackText} alt="twin-hearts-logo-text"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 header-right">
                        <h1 className="header-text">Think <span className="blue-text">Local</span><br/>Act <span className="red-text">Global</span></h1>
                        <a className="btn" href="#about" value="Learn More">Learn More</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;