import React from 'react';
import Contact from './Contact';

import kelly from '../img/memberPhotos/kelly-louise.jpg';
import craig from '../img/memberPhotos/craig.jpg';
import jackie from '../img/memberPhotos/jackie.jpg';
import molly from '../img/memberPhotos/molly.jpg';
import natalie from '../img/memberPhotos/natalie.jpg';
import flo from '../img/memberPhotos/flo.jpg';

const ContactList = (props) => {
    return (
        <>
            {contacts.map((c) => {
                return (<Contact contact={c}/>);
            })}
        </>
    )
}

export default ContactList;

const contacts = [{
    name: 'Kelly Louise-Austin',
    role: 'Founder',
    bio: ['Kelly-Louise is the Founder of Twin Hearts. She is a Mum to identical twin girls and a little boy, wife to Craig and works at a local Law firm. Kelly-Louise spent over 6 years working as an ambassador and international intern for Global Volunteers Network and their Eat So They Can program, as well as living in Kenya and working at Caroline Wambui Children’s Home. When not working in the TH office Kelly-Louise can be seen appearing in local musical theatre productions, performing with her husband in local nightspots or belting out a tune with a glass of wine in hand at a karaoke show.'],
    imgUrl: kelly
},{
    name: 'Craig Austin',
    role: 'Founder',
    bio: ['Born in Shepparton, Craig has lived in Ballarat for over 25 years and has worked for the Australian Government Department of Human Services for over twenty years.', 
    'He has a Diploma of Community Services Work from Federation University.',
    'Raised with a strong sense of social justice, Craig was delighted to be asked to join the Twin Hearts Committee. ',
    '“It’s exciting to be part of an organisation that not only raises awareness of important issues, but can make a difference in so many people’s lives.”'],
    imgUrl: craig
},{
    name: 'Jackie Warner',
    role: 'Founder',
    bio: ['Jackie worked as a psychiatric nurse, educator and manager for 40 years before retiring from professional work. She holds many tertiary qualifications and has varied experience working with committees and community organisations. She is married to a farmer and shares her time between caring for her grandchildren, the farm office and Twin Hearts when not working at the Ballarat Police station on the JP roster. She is proud to be the mother of Twin Hearts Inc founder Kelly-Louise Austin.'],
    imgUrl: jackie
},{
    name: 'Lorenne “Flo” Ramanauskas',
    role: 'Founder',
    bio: ['Mum of two and small business owner, Flo loves all things numbers and fun so it was a no brainer when she nominated for Treasurer. Flo enjoys creating memorable events and loves that Twin Hearts act on a local and Global level.'],
    imgUrl: flo
},{
    name: 'Kelly Louise-Austin',
    role: 'Founder',
    bio: ['Kelly-Louise is the Founder of Twin Hearts. She is a Mum to identical twin girls and a little boy, wife to Craig and works at a local Law firm. Kelly-Louise spent over 6 years working as an ambassador and international intern for Global Volunteers Network and their Eat So They Can program, as well as living in Kenya and working at Caroline Wambui Children’s Home. When not working in the TH office Kelly-Louise can be seen appearing in local musical theatre productions, performing with her husband in local nightspots or belting out a tune with a glass of wine in hand at a karaoke show.'],
    imgUrl: kelly
}];