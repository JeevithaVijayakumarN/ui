import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Dropdown from "react-bootstrap/Dropdown";
import groceryApi from "../../api/grocery";
import { products } from "../../data/dummy";
import { Navigate } from "react-router-dom";

const AddProduct = () => {
  const addAPI=(event,id)=>{
    event.preventDefault();
    groceryApi
    .post(`/products`,products)
    .then((res)=>{
      if(res.data.data){
        Navigate("/product");
      }else if(res.data.error){
        console.log(res.data.error.message);
      }else{
        console.log("Something went wrong");
      }
    })
    .catch((error)=>{
      console.log(`Error->${error}`);
    })
  }
  
  return (
    <div>
      
      <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 mx-auto">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="product name" />
        </Form.Group>
        <Form.Control type="number" placeholder="Price" />

        <Button variant="primary" type="submit" onClick={(event)=>{
          addAPI(event);
        }}>
          Add product
        </Button>
      </Form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AddProduct;
