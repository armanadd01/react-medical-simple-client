import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logoImg from '../../../images/logo.png';


const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user?.email);
    
    
    return (
        <>
            <div className="header-bottom w-100">
                <div className="">
                    {/* Site logo */}
                    
                        <div className="navbar navbar-expand-md navbar-light w-100 m-0 p-0">
                            <div className="col-md-4 m-0 p-0 ">
                                <div className="navbar-brand m-0 p-0 site-logo" >
                                    <img className="w-75" src={logoImg} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                {/* Navigation bar */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <nav className="collapse navbar-collapse p-md-0 p-3 text-end" id="navbarNav">
                                    <div className="col-md-6">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="bg-secondary text-light" className="nav-link fs-6" to="/home">Home</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="bg-secondary text-light" className="nav-link fs-6" to="/services">Departments</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="bg-secondary text-light" className="nav-link fs-6" to="/doctors">Doctors</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="navbar-nav ">
                                            
                                            <li className="nav-item p-2">
                                            { user?.email?
                                                    <NavLink to="/login">
                                                    <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                                    </NavLink>
                                                    :
                                                    <NavLink to="/login">
                                                    <button className="btn btn-warning me-2" >Log In</button>
                                                    </NavLink>

                                                }
                                                
                                            </li>
                                            { user?.email?
                                                <li className="nav-item p-2">
                                                    Signed in as: <a href="#login">{user?.displayName}</a>
                                                </li>
                                                :
                                                ''
                                            }
                                        </ul>
                                    </div>
                                    
                                </nav>
                            </div>
                        </div>
                        
                    </div>
            </div>
    </>
    );
};

export default Navbar;