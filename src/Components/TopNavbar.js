import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Logo from '../Assets/Images/Krushiwishwa .png';
import '../Components/Navbar.css';

function TopNavbar() {
    return (
        <Navbar expand="lg" className="custom-navbar transparent-navbar">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={Logo} className="Logo" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className="Menu">Home</Link>
                        <Link to='/aboutus' className="Menu">About Us</Link>
                        <Link to='/shop' className="Menu">Shop</Link>
                        <Link to='/consultancy' className="Menu">Consultancy</Link>
                        <Link to='/contact' className="Menu">Contact Us</Link>
                        <Link to='/gallery' className="Menu">Gallery</Link>
                    </Nav>
                    <div className="d-flex navbar-buttons">
                        <Button variant="outline-warning" className="me-2">Sign In</Button>
                        <Button variant="outline-success">Login</Button>
                    </div>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
