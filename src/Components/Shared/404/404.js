import React from 'react';
import notFound from '../../../images/notfound.jpg';

const Page404 = () => {
    return (
        <div className=" mx-auto text-center">
            <img className="img-fluid mx-auto w-100 h-100" src={notFound} alt="" />
        </div>
    );
};

export default Page404;