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
                    <div className="row service-section text-center">
                        <div className="title py-5 my-5 border-bottom border-primary">
                            <h5 className=" text-secondary  fs-6">WE CARE OUR DEPARTMENT SUPPORT</h5>
                            <h1  className=" fs-3">OUR OUTSTANDING<span className="fs-2 fw-bold text-primary p-2">Departments</span></h1>
                        </div>
                        
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