import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DepartmentDetails = () => {
    const { serviceId } = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setData(data.departments))
    },[])

    const ExactIteam = data.filter(td => td.key === serviceId);
    return (
        <div className="container-fluid">
            <div className="header py-5 border-bottom border-primary">
                <h5 className=" text-secondary  fs-6">WE CARE OUR DEPARTMENT SUPPORT</h5>
                <h1  className=" fs-3">OUR OUTSTANDING<span className="fs-2 fw-bold text-primary p-2">{ExactIteam[0]?.name}</span></h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-primary"> <span>Name of department:</span> {ExactIteam[0]?.name}</h2>
                        <h4 className="text-secondary">Short Description: <span className="fst-italic fw-light">{ExactIteam[0]?.short}</span></h4>
                        <p>Description : {ExactIteam[0]?.description}</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ExactIteam[0]?.img} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default DepartmentDetails;