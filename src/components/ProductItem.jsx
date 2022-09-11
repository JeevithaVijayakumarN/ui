import React from 'react'

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductItem = ({image,name,price}) => {
  return (
  //   <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={image} class="fitToContent"/>
  //   <Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0"></Card.ImgOverlay>
  //   <div className="d-flex flex-column justify-content-end align-items-center bg-dark w-100"></div>
  //   <Card.Body>
  //     <Card.Title>{name}</Card.Title>
  //     <Card.Text>Rs.{price}
  //     </Card.Text>
  //     <Button variant="primary">Add to cart</Button>
  //   </Card.Body>
  // </Card>

<Card className="bg-white text-black rounded my-2">
<Card.Img src={image} alt="Card image" class="fitToContent" />
<Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0"></Card.ImgOverlay>
  <div className="d-flex flex-column justify-content-end align-items-center bg-dark w-100 "></div>
    <Card.Title>{name}</Card.Title>
    <Card.Text >Rs.{price}
       </Card.Text>
       <Button variant="primary">Add to cart</Button>

</Card>

   
  )
}

export default ProductItem