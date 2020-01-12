import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './vendors/css/animate.css';
import './vendors/css/normalize.css';
import './vendors/css/ionicons.css';
import './App.css';
import './queries.css';
import './Modal.css';

import ContactList from './components/ContactList';
import SectionContainer from './components/SectionContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <SectionContainer className="section-about-us" id="about" sectionName="About Twin Hearts">
        <About/>
      </SectionContainer>
      
      <SectionContainer className="section-agm" id="agm" sectionName="2020 AGM">
      <div className="col-sm-12">
            <p>
            The Annual General Meeting of Twin Hearts Inc will be held on Wednesday January 22nd 
            at The Freight Bar upstairs function room, Mair Street, Ballarat. Meeting time is 6:30pm 
            for a 7pm start, and attendees can order dinner and drinks prior to the start of the 
            meeting. Members of the public are welcome to attend.
            </p>
            <p>
            Members and any potential members wishing to nominate for the general committee and 
            executive committee positions must complete a nomination form. Nominations will only be accepted 
            on the prescribed form. Electronic documents will be accepted and are encouraged and it will 
            be assumed that any name supporting the nomination is a member who has been asked to support 
            the nomination. Hard copy, signed forms may be dropped in the 251 Humffray Street Nth if preffered. 
            Members may nominate for more than one position on a single form. There is no obligation for 
            nominations to be accepted on the night.
            </p>
            <p>
            Please see the document for more details.
            </p>
        </div>

        <div className="row">
            <a className="btn btn-primary" href={`${process.env.PUBLIC_URL}/twin-hearts-agm-2020.pdf`} target="_blank" rel="noopener noreferrer">Download AGM Notice</a>
            <a className="btn btn-ghost" href="https://docs.google.com/forms/d/e/1FAIpQLSfPLw0HU2R3vPN58YMkn56G2D2_sIFvb8s5md1klkDItBeYog/formResponse" target="_blank" rel="noopener noreferrer">Nomination Form</a>
        </div>
      </SectionContainer>
      
      <Events/>
      
      <SectionContainer className="section-the-team" id="team" sectionName="The Team">
        <ContactList />
      </SectionContainer>

      <SectionContainer className="section-contact" id="contact" sectionName="Contact">
        <ContactForm/>
      </SectionContainer>
      
      <Footer/>
    </div>
  );
}

export default App;
