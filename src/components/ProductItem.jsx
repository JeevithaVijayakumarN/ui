import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProductItem = ({ image, name, price }) => {
  return (
    

    <Card className="bg-white text-black rounded my-2">
      <Card.Img src={image} alt="Card image" class="fitToContent w-100" />
      <Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0 ">
      <div className="d-flex flex-column justify-content-end align-items-center bg-white w-100 ">
      <Card.Title>{name}</Card.Title>
      <Card.Text>Rs.{price}</Card.Text>  
      
        <Button variant="primary "as={Link} to="/cart">Buy Now</Button> 
        
        {/* <Button variant="primary ">Buy Now</Button> {''}  */}
        </div>
        </Card.ImgOverlay>
        
    </Card>
    
  );
};
export default ProductItem;
