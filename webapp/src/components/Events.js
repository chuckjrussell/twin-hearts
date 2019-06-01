import React from 'react';
import './Events.css';
import eventNameImage from '../img/events/gala-event-name.png'

const Events = () => {
    return (
        <>
            <section className="section-events" id="events">
                <div className="events-container">
                    <img className="gala-ball-header" src={eventNameImage} alt="gala-ball"></img>
                    
                    <div className="row event-info-section">
                        Ballarat Civic Center<br />
                        8 PM - Midnight<br />
                        Tickets $120 - Supper &amp; drinks incl.<br />
                        Auctions  |  Raffles  |  Door Prizes<br />
                        Black Tie Dress<br />
                    </div>
                    

                    <div className="row">
                        <a className="btn tickets-button" href="http://paypal.me/twinhearts2017" target="_blank" rel="noopener noreferrer" value="Buy Now">Buy Tickets Now</a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Events;