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
             
              
                 
            </Col>
          </Row>
        </Container>
      </AppBody>
    </div>
  );
};
export default CartPage;
