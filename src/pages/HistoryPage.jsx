import React from "react";
import Button from "react-bootstrap/Button";

import "../assets/images/css/history.css";
import AppUserBar from "../components/AppUserBar";

const HistoryPage = () => {
  return (
    <>
      <AppUserBar />
      <div className="container d-flex justify-content-center mt-10">
       

        <div className="container mt-5">
          <h6>Item Details</h6>
          <div className="row">
            <div className="col">
              <img
                className="img-fluid w-25"
                src="https://i.imgur.com/iItpzRh.jpg"
              ></img>
            </div>
            <div className="col-xs-6">
              <ul type="none">
                <li>Size: 11</li>
                <li>Color: Desert Sage</li>
              </ul>
            </div>
          </div>
          <h6>Order Details</h6>
          <div className="row">
            <div className="col-xs-6">
              <ul type="none">
                <li className="left">Order number: #BBRT-3456981</li>
                <li className="left">Date: 19-03-2020</li>
                <li className="left">Price: Rs.690</li>
                <li className="left">Total Price:690</li>
              </ul>
            </div>
            <Button variant="light ">
              <a href="/">Back</a>
            </Button>
          </div>
        </div>
      </div>
      {/* <Button variant="primary "><a href="/">Back</a></Button> */}
    </>
  );
};

export default HistoryPage;
