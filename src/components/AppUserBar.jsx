import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const AppUserBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Grocery Shopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <Nav.Link as={Link} to={"/category"}>
              Category
            </Nav.Link> */}
            <Nav.Link as={Link} to={"/products"}>
              Products
            </Nav.Link>
            {/* <Nav.Link as={Link} to={"/history"}>
              History
            </Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>
              Cart
            </Nav.Link> */}
            <Nav.Link as={Link} to={"/"}>
              Logout
            </Nav.Link>

            {/* <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
     
          <Nav.Link as={Link} to={"/register"}>Register</Nav.Link> 
          <Nav.Link as={Link} to={"/admin"}>Admin</Nav.Link>  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppUserBar;
