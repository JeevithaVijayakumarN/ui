import React, { useEffect, useState } from 'react'


import AppBody from "../components/AppBody";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";



import ProductItem from "../components/ProductItem";


import Footer from "../components/Footer";
import AppUserBar from '../components/AppUserBar';
import groceryApi from '../api/grocery';

const ProductPage = () => {
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
       <>
      <AppBody>
        <AppUserBar />
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
    </>

    </div>
  )
}

export default ProductPage