import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
        <div className="col-sm-12">
            <p>
                Twin Hearts is based in Ballarat, where our founder Kelly-Louise was born and bred. 
                Having also spent time, living and working in Kenya and Tanzania, Kelly-Louise is 
                passionate about helping break the poverty cycle for women and children around the 
                world. It was this passion that drove Kelly-Louise to create Twin Hearts.
            </p>
            <p>
                Twin Hearts raises funds for small, local organisations and causes that perhaps don’t 
                get the funding or recognition that larger organisations get. For each local cause or 
                charity that we raise funds for, we also seek out a sister charity in Tanzania to donate 
                a portion of the raised funds to. 
            </p>
            <p>
                Some of the causes Twin Hearts have supported so far include First Night Care Packs, 
                The Yuille Park Young Parents Program, Wendouree 1st Scouts, WRISC, Pamoja, Investours 
                Dar es Saalam, Twice as Good, Girls not Brides and Kilimanjaro Women Information Exchange 
                and Community Organization (KWIECO), as well as organizing the candlelight vigil for 
                Eurydice Dixon and Tamara Farrell. 
            </p>
        </div>

        <div className="row">
            <a className="btn donate-button" href="http://paypal.me/twinhearts2017" target="_blank" rel="noopener noreferrer" value="Donate Now">Donate Now</a>
        </div>
        </>
    );
}

export default About;