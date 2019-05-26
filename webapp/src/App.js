import React from 'react';
import './App.css';
import './queries.css';
import './vendors/css/animate.css';
import './vendors/css/normalize.css';
import './vendors/css/ionicons.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ContactList from './components/ContactList';
import SectionContainer from './components/SectionContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <SectionContainer className="section-about-us" id="about" sectionName="Local + Global">
        <div className="col">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="col">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
      </SectionContainer>
      
      <SectionContainer className="section-events" id="events" sectionName="What's On">
        <p>
            Info about current events will go here.
        </p>
      </SectionContainer>
      
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
