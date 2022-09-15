import React, { useState, useEffect } from "react";
import AppBar from "../components/AppBar";

import "bootstrap/dist/css/bootstrap.min.css";

import Carousels from "../components/Carousels";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Stack from "react-bootstrap/Stack";

import Title from "../components/Title";

import ProductItem from "../components/ProductItem";

import AppBody from "../components/AppBody";

import ProductOne from "../assets/images/groceries.jpg";

import Footer from "../components/Footer";
import ProductPage from "./ProductPage";
import groceryApi from "../api/grocery";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    groceryApi

      .get(`product/all`)
      .then((response) => {
        let data = response.data;
        if (data.data) {
          console.log(data.data);
          setProducts(data.data);
        } else if (data.error) {
          console.log(data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }, []);
 
  return (
    <div>
      <AppBar />
      <Carousels />
      <AppBody>
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="mt-5">
                {/* <Title title="Products" /> */}
                <Container>
                  <Row>
                    {products.map((product, index) => {
                      return (
                        <Col md={3}>
                          <ProductItem
                            image={product.image}
                            name={product.productName}
                            price={product.price}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Stack>
            </Col>
          </Row>

         
        </Container>
      </AppBody>
      <Footer />
    </div>
  );
};

export default HomePage;
