import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const Service = (props) => {
    const {key, name, img, short } = props.department
    return (
        // Sercice Component
        <div className="col-md-4 col-12 mt-5  ">
            <Card  className="text-center border-0 h-100 service-card">
                <Card.Img variant="top" className="images" src={img} />
                <Card.Body>
                    <Card.Title ><FontAwesomeIcon className="font-icon position-absolute" color="#267AEB" icon={faHeartbeat}></FontAwesomeIcon></Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {short}
                    </Card.Text>
                </Card.Body>
                
                <Card.Body>
                <Link to={`/service/${key}`}>
                    <Button className="btn-primary">Learn More {name}</Button>
                </Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;