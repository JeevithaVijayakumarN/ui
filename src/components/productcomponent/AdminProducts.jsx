import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import groceryApi from "../../api/grocery";
const AdminProducts = () => {
  const[products,setProducts]=useState([]);
  useEffect(()=>{
    groceryApi
    .get(`/products/all`)
    .then((res)=>{
      console.log(res.data.data);
      if(res.data.data){
        setProducts(res.data.data);
      }else if(res.data.error){
        console.log(res.data.error.message);
      }else{
        console.log("Something went wrong");
      }
    })
    .catch((error)=>{
      console.log(`Error->${error}`);
    })
  },[])
  const deleteAPI=(event,id)=>{
    event.preventDefault();
    groceryApi
    .delete(`/products/${id}`)
    .then((res)=>{
      console.log(res.data.data);
      if(res.data.data){
        setProducts(res.data.data);
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
      <div className="container nt=5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1>Products</h1>
            <Link to={"/addproducts"}>
              <Button variant="info">Add</Button>
            </Link>
            {/* </div>
          </div>
        </div> */}
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category id</th>
                  <th>Products</th>
                  <th>Price</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Milk</td>
                  <td>Rs.20</td>
                  
                  <Button variant="info">Edit</Button>
                  <Button variant="light">Delete</Button>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ButterMilk</td>
                  <td>Rs.15</td>
                 
                  <Button variant="info">Edit</Button>
                  <Button variant="light">Delete</Button>
                </tr>
                <tr>
                  <td>3</td>
                  <td >Fresh Bread</td>
                  <td>Rs.15</td>
                  <Button variant="info">Edit</Button>
                  <Button variant="light">Delete</Button>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
