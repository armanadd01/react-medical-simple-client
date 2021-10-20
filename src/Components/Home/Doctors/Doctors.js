import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setDoctor(data.doctors))
    },[])
    return (
        <div>
            <div>
            <div className="services">
                <div className="container">
                    <div className="row service-section">
                        <div className="title py-5 my-5 border-bottom border-primary">
                            <h5 className=" text-secondary  fs-6">WE CARE OUR DEPARTMENT SUPPORT</h5>
                            <h1  className=" fs-3">OUR OUTSTANDING<span className="fs-2 fw-bold text-primary p-2">Departments</span></h1>
                        </div>
                        {
                            // map service data
                            doctors.map(doctor => <Doctor
                                key={doctor.key}
                                doctor={doctor}
                            >

                            </Doctor>)
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Doctors;