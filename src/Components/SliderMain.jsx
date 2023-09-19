/* IndividualIntervalsExample.js */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <Carousel className='slider'>
      <Carousel.Item interval={1000} className='slider-item slide1'>
        <Carousel.Caption className='h-100 d-flex flex-column justify-content-center'>
          
          <p className='display-1 fw-bold custom-link-font'>SHOP NOW </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className='slider-item slide2'>
        <Carousel.Caption className='h-100 d-flex flex-column justify-content-center'>
          <p className='custom-link-font display-1 fw-bold'>SALE UP TO 25 %</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='custom-link-font slider-item slide3'>
        <Carousel.Caption className='custom-link-font h-100 d-flex flex-column justify-content-center'>
          <p className='custom-link-font display-1 fw-bold'>WE DELIVER FOR FREE </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
