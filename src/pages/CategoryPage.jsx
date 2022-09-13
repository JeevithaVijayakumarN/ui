import React, { useState } from "react";

import AppBody from "../components/AppBody";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Footer from "../components/Footer";

import Title from "../components/Title";
import CategoryItem from "../components/CategoryItem";

import AppUserBar from "../components/AppUserBar";
import { useEffect } from "react";
import groceryApi from "../api/grocery";


const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    groceryApi  
      .get(`/category/all`)
      .then((response) => {
        let data = response.data;
        if (data.data) {
          console.log(data.data);
          setCategories(data.data);
        } else if (data.error) {
          console.log(data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  },
   []);
   
  
  return (
    <div>
      <>
        <AppBody>
          <AppUserBar />
          <Container>
            <Row>
              <Col>
                <Title title="Category" />
                <Stack gap={3} className="mt-5">
                  {/* <Title title="Category" /> */}
                  <Container>
                    <Row>
                      {categories.map((category, index) => {
                        return (
                          <Col md={3}>
                            <CategoryItem
                              image={category.image}
                              name={category.categoryName}
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
  );
};

export default CategoryPage;
