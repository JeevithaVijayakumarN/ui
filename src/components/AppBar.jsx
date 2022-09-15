import React from "react";
import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AppBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {loggedInUser.role === "ADMIN" ? (
          <Navbar.Brand as={Link} to={"/adminuser"}>
            Grocery Shopping
          </Navbar.Brand>
        ) : (
          <Navbar.Brand as={Link} to={"/"}>
            Grocery Shopping
          </Navbar.Brand>
        )}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {loggedInUser.role === "ADMIN" ? (
              <Nav.Link as={Link} to={"/products"}>
                Products
              </Nav.Link>
            ) : null}

            {loggedInUser.isLoggedIn ? (
              <>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>

                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to={"/login"}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
