import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            {/* Header top Component */}
            <div className="container-fluid">
                <div className="row header-top d-lg-flex d-none bg-dark border-bottom border-secondary text-secondary">
                    <div className=" col-md-6">
                        <p className="text-center pt-1 fs-6 ">Hello guest! Welcome to medicalhealthcare, Inc.</p>
                    </div>
                    <div className="phone col-md-3  border-end border-secondary">
                        <p className="text-center pt-1 fs-6 ">+880 1234 567890</p>
                    </div>
                    <div className="email col-md-3  border-end border-secondary">
                        <p className="text-center pt-1  fs-6 ">medicalhealthcare@gmail.com</p>
                    </div>
                </div>
            <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;