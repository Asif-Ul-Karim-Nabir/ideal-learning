import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Navbar bg="info" variant="dark">
    <Container className="navbar-container">
    <Navbar.Brand href="#home">Ideal Learning</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink to="/home" className="mx-2 nav-container">Home</NavLink>
      <NavLink to="/courses" className="mx-2 nav-container">Courses</NavLink>
      <NavLink to="/about-us" className="mx-2 nav-container">About Us</NavLink>
      <NavLink to="/support" className="mx-2 nav-container">Support</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </nav>
    );
};

export default Header;