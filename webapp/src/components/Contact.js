import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const Contact = (props) => {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <>
            <div className="col-lg-3" onClick={() => setIsShowing(true)}>
                <div className="contact-card">
                    <img src={props.contact.imgUrl} alt={`${props.contact.name}-avatar`}/>
                    <div className="contact-name">
                    {props.contact.name}
                    </div>
                </div>
            </div>

            <Modal show={isShowing} onHide={() => setIsShowing(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.contact.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.contact.bio.map((i => {
                    return (<p>{i}</p>)
                }))}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setIsShowing(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Contact;