import React from 'react';
import './Events.css';
import eventNameImage from '../img/events/gala-event-name.png'
import twinHeartsPresents from '../img/events/gala-twin-hearts-presents.png';

const Events = () => {
    return (
        <>
            <section className="section-events" id="events">
                <div className="events-container">
                    <img className="gala-twin-hearts-presents" src={twinHeartsPresents} alt="twin-hearts-presents"/>
                    <img className="gala-ball-header" src={eventNameImage} alt="gala-ball"></img>
                    
                    <div className="event-info-section">
                        Saturday, 12th October 2019<br />
                        Ballarat Civic Hall<br />
                        8 PM - Midnight<br />
                        Tickets $120 - Supper &amp; drinks incl.<br />
                        Auctions  |  Raffles  |  Door Prizes<br />
                        Black Tie Dress<br />
                    </div>
                    

                    <div className="row">
                        <a className="btn tickets-button" href="https://www.trybooking.com/BCHWO" target="_blank" rel="noopener noreferrer" value="Buy Now">Buy Tickets Now</a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Events;