import React from 'react';

import mainLogo from '../img/Logo-image.png';
import logoBlackText from '../img/logo-text-black.png';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="row">
                    <ul className="main-nav">
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">The Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                </div>
            </nav>
            <div className="container"><div className="row header-row">
                <div className="col header-left">
                    <div className="main-logo-container">
                        <img src={mainLogo} className="main-logo"></img>

                        <div className="logo-container">
                            <img className="header-logo-image" src={logoBlackText}></img>
                        </div>
                    </div>
                </div>
                <div className="col header-right">
                    <h1 className="header-text">Think <span className="blue-text">Local</span><br/>Act <span className="red-text">Global</span></h1>
                    <a className="btn" href="#about" value="Learn More">Learn More</a>
                </div>
              </div>
            </div>
        </header>
    )
}

export default Header;