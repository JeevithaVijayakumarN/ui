import React from 'react'

import Carousel from "react-bootstrap/Carousel";

import carouselOne from "../assets/images/groceries.jpg";
import carouselTwo from "../assets/images/vegetables.jpg";
import carouselThree from "../assets/images/strawberry.jpg";

const Carousels = () => {
  return (
    <Carousel>
    <Carousel.Item className="carouselHeight">
      <img className="d-block w-100" src={carouselOne} alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carouselHeight">
      <img className="d-block w-100" src={carouselTwo} alt="Second slide" />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carouselHeight">
      <img className="d-block w-100" src={carouselThree} alt="Third slide" />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>  
    
  )
}

export default Carousels