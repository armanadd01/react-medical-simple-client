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
            <div className="header py-5">
            <h1  className="py-5 my-5 border-bottom border-primary fs-3"> <span className="fs-2 fw-bold text-light bg-danger border-rounded p-2">{ExactIteam[0]?.name}</span></h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-primary">Name of department: {ExactIteam[0]?.name}</h2>
                        <h4 className="text-secondary">Short Description: {ExactIteam[0]?.short}</h4>
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