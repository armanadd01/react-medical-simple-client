import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../images/logo.png';


const Navbar = () => {
    return (
            <div className="header-bottom w-100">
                <div className="navbar navbar navbar-expand-md navbar-light w-100 m-0 p-0">
                    {/* Site logo */}
                    
                        <div className="row align-items-center">
                            <div className="col-md-6 m-0 p-0 ">
                                <div className="navbar-brand m-0 p-0 site-logo" >
                                    <img className="w-75" src={logoImg} alt="" />
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                {/* Navigation bar */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <nav className="collapse navbar-collapse p-md-0 p-3 text-end" id="navbarNav">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="bg-secondary text-light" className="nav-link fs-6" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="bg-secondary text-light" className="nav-link fs-6" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="bg-secondary text-light" className="nav-link fs-6" to="/teachers">Teachers</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
            </div>

    );
};

export default Navbar;