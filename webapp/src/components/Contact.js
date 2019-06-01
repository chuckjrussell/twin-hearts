import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

import './Contact.css';

const Contact = (props) => {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6" onClick={() => setIsShowing(true)}>
                <div className="contact-card">
                    <img src={props.contact.imgUrl} alt={`${props.contact.name}-avatar`} className="contact-card-image"/>
                    {props.contact.role !== '' && (
                    <div className="contact-role">
                        {props.contact.role}
                    </div>
                    )}

                    <div className="contact-name">
                    {props.contact.name}
                    </div>
                </div>
            </div>

            <Modal show={isShowing} onHide={() => setIsShowing(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.contact.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.contact.bio.map(((i, idx) => {
                    return (<p key={idx}>{i}</p>)
                }))}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setIsShowing(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Contact;