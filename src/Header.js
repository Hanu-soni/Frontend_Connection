import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>

            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className=" navbarf fixed-top desktop11">
                    <Container fluid>
                        <Navbar.Brand >
                            <Link to="/"> <img src='./img/tutor.png' className='tutorimg' /></Link>
                           
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3 navlink2">
                                    <Link className="navlink2" to="/">Home</Link>
                                    <Link className="navlink2" to="/">Programes </Link>
                                    <Link className="navlink2" to="/">Our Tutors </Link>
                                    <Link className="navlink2" to="/">About Us </Link>
                                    <Link className="navlink2" to="/">Contact Us </Link>

                                </Nav>
                                <Form className="d-flex">


                                    <Button variant="" className='iconj'><CiSearch className='searchicon' /></Button>
                                    <Button className='signup1'> <Link className="navlink200" to="/Login" style={{color:"black"}}>Sign In</Link> </Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

            ))}



            <Navbar bg="white" expand="md" className='fixed-top navu9 desktop22' style={{ height: "90px", color: "black" }}>
                <Container>
                    <Link to="/" className="text-decoration-none  mx-3" style={{ fontSize: "34px", fontFamily: "Italic" }}>
                        <img src='./img/tutor.png' className='tutorimg1' />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-white bn"  >
                        <Nav className="me-auto nav-links" >
                        <Link className="navlink2" to="/">Home</Link>
                                    <Link className="navlink2" to="/">Programes </Link>
                                    <Link className="navlink2" to="/">Our Tutors </Link>
                                    <Link className="navlink2" to="/"> Us </Link>
                                    <Link className="navlink2" to="/">Contact Us </Link>
                                    <Link className="navlink2" to="/Login">Sign In </Link>
                                    
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    )
}

export default Header
