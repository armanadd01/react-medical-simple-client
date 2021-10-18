import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [departments, setDepartment] = useState([]);

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setDepartment(data.departments))
        console.log(departments)
    },[])
    return (
        <div>
            <div className="services">
                <div className="container">
                    <div className="row service-section">
                        <h1  className="py-5 my-5 border-bottom border-primary fs-3">Our Popular <span className="fs-2 fw-bold text-light bg-danger border-rounded p-2">Online Courses</span></h1>
                        {
                            // map service data
                            departments.map(department => <Service
                                key={department.key}
                                department={department}
                            >

                            </Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;