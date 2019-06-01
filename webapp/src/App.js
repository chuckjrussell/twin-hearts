import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './vendors/css/animate.css';
import './vendors/css/normalize.css';
import './vendors/css/ionicons.css';
import './App.css';
import './queries.css';

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
