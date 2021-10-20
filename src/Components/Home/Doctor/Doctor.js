import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const {key, name, img, specialty } = props.doctor
    return (
        <div className="col-md-3 col-12 my-5 ">
            <Card  className="text-center border-0 h-100 service-card">
                <Card.Img variant="top" className="images" src={img} />
                <Card.Body>
                    <Card.Title classNa  me=" p-3 h-25 w-25 m-auto text-center align-middle"><FontAwesomeIcon className="font-icon-two position-absolute" color="#267AEB" icon={faHeartbeat}></FontAwesomeIcon></Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {specialty}
                    </Card.Text>
                </Card.Body>
                
                <Card.Body>
                    <Link to={`/doctor/${key}`}>
                        <Button variant="outline-primary">Learn More</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;