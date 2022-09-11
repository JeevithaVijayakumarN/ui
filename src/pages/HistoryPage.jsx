import React from "react";
import AppBar from "../components/AppBar";

import "../assets/images/css/history.css";
import AppUserBar from "../components/AppUserBar";

const HistoryPage = () => {
  return (
    <>
      <AppUserBar />

      <div className="container d-flex justify-content-center mt-10">
        <h4 className="modal-title">
          Adidas Yeezy Boost 350 V2 Limited Edition
        </h4>

        <div className="container">
          <h6>Item Details</h6>
          <div className="row">
            <div className="col">
              <img
                className="img-fluid"
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
                <li className="left">Order number:</li>
                <li className="left">Date:</li>
                <li className="left">Price:</li>
                <li className="left">Shipping:</li>
                <li className="left">Total Price:</li>
              </ul>
            </div>

            <div className="col-xs-6">
              <ul className="right" type="none">
                <li className="right">#BBRT-3456981</li>
                <li className="right">19-03-2020</li>
                <li className="right">Rs.690</li>
               
              </ul>
            </div>
          </div>
          <h6>Shipment</h6>
          <div className="row">
            <div className="col-xs-6">
              <ul type="none">
                <li className="left">Estimated arrival</li>
              </ul>
            </div>
            <div className="col-xs-6">
              <ul type="none">
                <li className="right">25-03-2020</li>
              </ul>
            </div>
          </div>
        </div>

        <button type="button" className="btn">
          Track order
        </button>
      </div>
    </>
  );
};

export default HistoryPage;
