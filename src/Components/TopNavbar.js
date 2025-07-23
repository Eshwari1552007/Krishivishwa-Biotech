import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Logo from "../Assets/Images/Krushiwishwa .png";
import "../Components/Navbar.css";

import { FiUserPlus } from "react-icons/fi";
import { FaUserCircle, FaUser } from "react-icons/fa";
import {
    BsHouseDoor,
    BsInfoCircle,
    BsCart,
    BsPeople,
    BsTelephone,
    BsImages
} from "react-icons/bs";

function TopNavbar() {
    const [expanded, setExpanded] = useState(false);
    const [clickedItem, setClickedItem] = useState(null);
    const location = useLocation();
    const navigate = useNavigate(); // ✅ Add this line
    const isHome = location.pathname === "/";
    const navbarRef = useRef();
    
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector(".custom-navbar");
            if (window.scrollY > 50) {
                nav.classList.add("navbar-scrolled");
            } else {
                nav.classList.remove("navbar-scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        if (expanded) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [expanded]);

    return (
        <Navbar
            expanded={expanded}
            onToggle={setExpanded}
            expand="lg"
            fixed="top"
            className="custom-navbar"
            ref={navbarRef}
        >
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={Logo} className="Logo" alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" onClick={() => setExpanded(false)}>
                        {[
                            { path: "/", label: "Home", icon: <BsHouseDoor /> },
                            { path: "/aboutus", label: "About Us", icon: <BsInfoCircle /> },
                            { path: "/shop", label: "Shop", icon: <BsCart /> },
                            { path: "/consultancy", label: "Consultancy", icon: <BsPeople /> },
                            { path: "/contact", label: "Contact Us", icon: <BsTelephone /> },
                            { path: "/gallery", label: "Gallery", icon: <BsImages /> },
                        ].map(({ path, label, icon }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) => (isActive ? "Menu active" : "Menu")}
                            >
                                <span className="hover-icon">{icon}</span>
                                <span className="text-label">{label}</span>
                            </NavLink>
                        ))}
                    </Nav>

                    {isHome && (
                        <Dropdown className="navbar-dropdown">
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                                className="d-flex align-items-center gap-2"
                            >
                                <FaUser />
                                Account
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => {
                                        setClickedItem("signup");
                                        setExpanded(false);
                                        navigate("/login", { state: { showSignup: true } }); // ✅ pass state
                                        setTimeout(() => setClickedItem(null), 1500);
                                    }}
                                    className={clickedItem === "signup" ? "active-dropdown" : ""}
                                >
                                    <FiUserPlus style={{ marginRight: "8px" }} />
                                    Sign up
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to="/login"
                                    className={clickedItem === "login" ? "active-dropdown" : ""}
                                    onClick={() => {
                                        setClickedItem("login");
                                        setExpanded(false);
                                        setTimeout(() => setClickedItem(null), 1500);
                                    }}
                                >
                                    <FaUserCircle style={{ marginRight: "8px" }} />
                                    Login
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
