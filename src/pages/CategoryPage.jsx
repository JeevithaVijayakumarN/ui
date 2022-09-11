import React from 'react'

import AppBar from '../components/AppBar'

import AppBody from "../components/AppBody";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Footer from "../components/Footer";

import Title from "../components/Title";
import CategoryItem from '../components/CategoryItem';

import { products } from "../data/dummy";
import AppUserBar from '../components/AppUserBar';

const CategoryPage = () => {
  return (
    <div>
       <>
      <AppBody>
        <AppUserBar />
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="mt-5">
                <Title title="Category" />
                <Container>
                {products.map((product, index) => {
                      return (
                        <Col md={4}>
                          <CategoryItem
                            image={product.image}
                            name={product.name}    
                          />
                        </Col>
                      );
                    })}
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

export default CategoryPage