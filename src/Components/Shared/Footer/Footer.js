import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            {/* Footer Component */}
            <footer className="footer-20192">
                <div className="site-section">
                    <div className="container">
                    <div className="cta row text-center justify-content-center px-5">
                        <div className="col-md-12 mx-auto">
                            <h2 className="mb-0">Ready for a next project?</h2>
                            <h3 className="text-dark">Let's get started!</h3>
                        </div>
                        <div className="col-md-12 mx-auto">
                            <a href="#" className="btn btn-dark rounded-0 py-3 px-5">Contact us</a>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-sm">
                            <NavLink activeClassName=" text-light" className="nav-link fs-6" to="/home">
                                <p className="text-light fw-bold fs-3">Medical Health care</p>
                            </NavLink>
                        
                        <p className="copyright">
                            <small>&copy; 2021. All Copy rights reserve to arman and Medical Health Care</small>
                        </p>
                        </div>
                        <div className="col-sm">
                        <h3>Customers</h3>
                        <ul className="list-unstyled links">
                            <li><a href="#">Buyer</a></li>
                            <li><a href="#">Supplier</a></li>
                        </ul>
                        </div>
                        <div className="col-sm">
                        <h3>Company</h3>
                        <ul className="list-unstyled links">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                        </div>
                        <div className="col-sm">
                        <h3>Further Information</h3>
                        <ul className="list-unstyled links">
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                        </div>
                        <div className="col-md-3">
                        <h3>Follow us</h3>
                            <ListGroup className="bg-transparent" horizontal>
                                <ListGroup.Item className="bg-transparent"><FontAwesomeIcon className="text-primary fs-3" icon={faFacebook}></FontAwesomeIcon></ListGroup.Item>
                                <ListGroup.Item className="bg-transparent"><FontAwesomeIcon className="text-danger fs-3" icon={faInstagram}></FontAwesomeIcon></ListGroup.Item>
                                <ListGroup.Item className="bg-transparent"><FontAwesomeIcon className="text-danger fs-3" icon={faYoutube}></FontAwesomeIcon></ListGroup.Item>
                                
                            </ListGroup>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;