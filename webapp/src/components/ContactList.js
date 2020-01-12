import React from 'react';
import Contact from './Contact';

import kelly from '../img/memberPhotos/kelly-louise.jpg';
import craig from '../img/memberPhotos/craig.jpg';
import jackie from '../img/memberPhotos/jackie.jpg';
import natalie from '../img/memberPhotos/natalie.jpg';
import flo from '../img/memberPhotos/flo.jpg';
import kylie from '../img/memberPhotos/kylie.jpg';
import tom from '../img/memberPhotos/tom.jpg';
import stevie from '../img/memberPhotos/steve.jpg';
import cassie from '../img/memberPhotos/cassie.jpg';
import chuck from '../img/memberPhotos/chuck.jpg';

const ContactList = (props) => {
    return (
        <>
            {contacts.map((c, idx) => {
                return (<Contact key={idx} contact={c}/>);
            })}
        </>
    )
}

export default ContactList;

const contacts = [{
    name: 'Kelly Louise-Austin',
    role: 'Founder',
    bio: ['Kelly-Louise is the Founder of Twin Hearts. She is a Mum to identical twin girls and a little boy, wife to Craig and works at a local Law firm. Kelly-Louise spent over 6 years working as an ambassador and international intern for Global Volunteers Network, on their \'Eat So They Can\' program, as well as living in Kenya and working at Caroline Wambui Children’s Home.', 
    'When not working in the Twin Hearts office, Kelly-Louise can be seen appearing in local musical theatre productions, performing at local night spots with her Husband, or belting out a tune with a glass of wine in hand at a karaoke show.'],
    imgUrl: kelly
},{
    name: 'Stevie Kaze',
    role: 'Vice President',
    bio: ['Along with careers in the IT and Customer Service Industry, over the past 30 years Stevie has made a name for himself in the Ballarat Entertainment scene. While managing his own company, KAZE Entertainment, Stevie has worked on the Ballarat Beat Rockabilly Festival, the Ballarat Begonia Festival, as well as working with many local and national businesses to provide Ballarat with entertainment services of the highest order.',
    'Stevie brings his local knowledge and expertise to Twin Hearts, to help ensure the success of our local fundraising events.'],
    imgUrl: stevie
},{
    name: 'Jackie Warner',
    role: 'Secretary',
    bio: ['Jackie worked as a psychiatric nurse, educator and manager for 40 years before retiring from professional work. She holds many tertiary qualifications, and has varied experience working with committees and community organisations.', 
    'Jackie is married to a farmer, and shares her time between working in the farm office, caring for her grandchildren, working as secretary extraordinaire to Twin Hearts, as well as volunteering at the Ballarat Police station as a Justice of the Peace. She is proud to be the mother of Twin Hearts Inc founder Kelly-Louise Austin.'],
    imgUrl: jackie
},{
    name: '“Flo” Ramanauskas',
    role: 'Treasurer',
    bio: ['Mum of two and small business owner, Flo loves all things numbers and fun so it was a no brainer when she nominated for Treasurer. Flo enjoys creating memorable events and loves that Twin Hearts act on a local and Global level.'],
    imgUrl: flo
},{
    name: 'Craig Austin',
    role: '',
    bio: ['Born in Shepparton, Craig has lived in Ballarat for over 25 years, and has worked for the Australian Government Department of Human Services for over twenty years. He has a Diploma of Community Services Work from Federation University.',
    'Raised with a strong sense of social justice, Craig was delighted to be asked to join the Twin Hearts Committee.“It’s exciting to be part of an organisation that not only raises awareness of important issues, but can make a difference in so many people’s lives.”'],
    imgUrl: craig
},{
    name: 'Natalie Carrigg',
    role: '',
    bio: ['Natalie is currently studying her Certificate IV in Education Support. In her spare time, she enjoys getting crafty, and is an avid knitter, scrap-booker, cross stitcher and card maker.',
    'Natalie brings to Twin Hearts a love of children, and is passionate about women’s and children’s causes.'],
    imgUrl: natalie
},{
    name: 'Tom Corcoran',
    role: '',
    bio: ['Tom has lived in Ballarat for most of his life, and has completed a Bachelor of Production (Stage Management) degree at the Victorian College of the Arts. He has a keen interest in theatre and giving back to the community.'],
    imgUrl: tom
},{
    name: 'Kylie Macdonald',
    role: '',
    bio: ['Kylie Macdonald is an Education Support staff member at Urquhart Park Primary School, and has a love of musical theatre.',
    'Kylie is one of the newest members of Twin Hearts and looks forward to organizing many wonderful events to support charities, both locally and overseas!'],
    imgUrl: kylie
},{
    name: 'Cassie Russell',
    role: '',
    bio: ['With a background in Early Childhood Education, and raising two young children of her own, Cassie brings to Twin Hearts her passion for womens and childrens causes.',
    'When she is not busy running around after her children, she can be found arguing with her husband (fellow committee member, Chuck) over Twin Hearts website and graphic design.'],
    imgUrl: cassie
},{
    name: 'Chuck Russell',
    role: '',
    bio: ['Chuck originally hails from the United States of America, moving from North Carolina to Ballarat in January of 2019. Upon his arrival in Australia, Chuck promptly joined the Twin Hearts committee, bringing with him skills in all things digital services.',
    'Chuck can be seen in and around Ballarat, entering his car through the front passenger side, then wondering where his steering wheel went.'],
    imgUrl: chuck
}];