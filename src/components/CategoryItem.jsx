import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const CategoryItem = ({ image, name }) => {
  return (
    <Card className="bg-white text-white rounded my-2">
      <Card.Img src={image} alt="Card image" class="fitToContent w-100" />
      <Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0 ">
        <div className="d-flex flex-column justify-content-end align-items-center bg-dark w-100 bg-opacity-50 p-2 rounded-top">
          <Card.Title>{name}</Card.Title>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CategoryItem;
