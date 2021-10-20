import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const { doctorId } = useParams();
    //Fatching Data
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setData(data.doctors))
    },[])
    const ExactIteam = data.filter(td => td.key === doctorId);
    return (
        // Doctors Details
        <div>
            <Container className="py-5">
                <Row>
                    <Col>
                        <Card className="m-1 border border-5">
                            <Card.Body>
                                <Card.Img variant="top" src={ExactIteam[0]?.img} />   
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <h5 className="text-primary fw-normal"></h5>
                        <h1 className="fw-bold">{ExactIteam[0]?.name}</h1>
                        <h6 className="fst-italic"> <span className="text-primary">{ExactIteam[0]?.specialty}</span></h6>
                        <h3 className="fw-normal">{ExactIteam[0]?.experience}</h3>
                        <p className=" fw-light">{ExactIteam[0]?.details}</p>
                        
                        
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default DoctorDetails;