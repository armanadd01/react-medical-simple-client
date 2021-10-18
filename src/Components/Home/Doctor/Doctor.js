import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Doctor = (props) => {
    const {name, img, specialty } = props.doctor
    return (
        <div className="col-md-6 col-12 mt-5 border-bottom ">
            <Card  className="text-center border-0 h-100">
                <Card.Img variant="top" className="images" src={img} />
                <Card.Body>
                    <Card.Title classNa  me=" p-3 h-25 w-25 m-auto text-center align-middle"><FontAwesomeIcon  color="#267AEB" icon={faHeartbeat}></FontAwesomeIcon></Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {specialty}
                    </Card.Text>
                </Card.Body>
                
                <Card.Body>
                    <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;