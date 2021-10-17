import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className="h-50 banner">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src="http://hasan.themexlab.com/new/hope-medical/hope-medical/images/main-slider/3.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>WE SET THE STANDARDS</h3>
                <p>OTHERS TRY TO LIVE UP TO</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src="https://i.ibb.co/JtWC3jz/dark-data-healthcare.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>WE SET THE STANDARDS</h3>
                <p>OTHERS TRY TO LIVE UP TO</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src="http://hasan.themexlab.com/new/hope-medical/hope-medical/images/main-slider/1.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>WE SET THE STANDARDS</h3>
                <p>
                OTHERS TRY TO LIVE UP TO
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    
    </>
  );
};

export default Banner;