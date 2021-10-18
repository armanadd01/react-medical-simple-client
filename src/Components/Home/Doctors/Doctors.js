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
                        <h1  className="py-5 my-5 border-bottom border-primary fs-3">Our Popular <span className="fs-2 fw-bold text-primary">Departments</span></h1>
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