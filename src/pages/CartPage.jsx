import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../assets/images/css/cart.css";

import AppBody from "../components/AppBody";

import { products } from "../data/dummy";
import AppUserBar from "../components/AppUserBar";

const CartPage = () => {
  let orderedProducts = products.filter((product) => product.id < 3);

  return (
    <div>
      <AppUserBar />
      <AppBody>
        <Container>
          <Row>
            <Col>
            <div class="card cartCard mt-50 mb-50 bg-light text-dark">
                <div class="title cardTitle mx-auto">
            <h1>Thank you for your order!</h1>
            </div>
            </div>
              {/* <div class="card cartCard mt-50 mb-50 bg-light text-dark">
                <div class="title cardTitle mx-auto">
                  {" "}
                  Thank you for your order!{" "}
                </div>
                <div class="main">
                  <span id="sub-title">
                    <p>
                      <b>Payment Summary</b>
                    </p>
                  </span>
                  {orderedProducts.map((product, index) => {
                    return (
                      <div class="row row-main">
                        <div class="col-3">
                          <img
                            class="img-fluid img-thumbnail"
                            src="https://i.imgur.com/qSnCFIS.png"
                          />
                        </div>
                        <div class="col-6">
                          <div class="row d-flex">
                            <p>
                              <b>{product.name}</b>
                            </p>
                          </div>
                          <div class="row d-flex">
                            <p class="text-muted">{product.desc}</p>
                          </div>
                        </div>
                        <div class="col-3 d-flex justify-content-end">
                          <p>
                            <b>Rs. {product.price}</b>
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  <hr />
                  <div class="total">
                    <div class="row">
                      <div class="col">
                        <b> Total:</b>
                      </div>
                      <div class="col d-flex justify-content-end">
                        <b>
                          Rs.{"  "}
                          <span>
                            {orderedProducts.reduce((acc, curr) => {
                              return acc + curr.price;
                            }, 0)}
                          </span>
                        </b>
                      </div>
                    </div>
                    <button class="btn cartBtn btn-primary d-flex mx-auto">
                      Order
                    </button>
                  </div>
                </div>
              </div> */}
              
                 
            </Col>
          </Row>
        </Container>
      </AppBody>
    </div>
  );
};
export default CartPage;
