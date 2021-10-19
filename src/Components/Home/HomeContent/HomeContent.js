import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HomeContent = () => {
    return (
        <div>
            <div className="home-content">
            <Container className="py-5">
                <Row>
                    <Col>
                        <Card className="m-1 border border-5">
                            <Card.Body>
                                <Card.Img variant="top" src="http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/featured-image-9.jpg" />   
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <h5 className="text-primary fw-normal">Medical Health Care is one of the best medical around us</h5>
                        <h1 className="fw-bold">Medical Health Care. Inc.</h1>
                        <p className=" fw-light">The Medical Health Care have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                        <h3 className="fw-normal">Arman Habib Nahid</h3>
                        <small>CEO</small>
                        <h6 className="fst-italic"> <span className="text-primary">Medical Health Care</span> Hospital</h6>
                    </Col>
                    
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default HomeContent;