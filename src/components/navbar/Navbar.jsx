import React from "react";
import Logo from './Logo';
import CartWidget from '../cartwidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, Outlet } from 'react-router-dom';


function ColorSchemesExample() {
    return (
      <>    
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/"><Logo/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} href="/">Home</Nav.Link>
              <Nav.Link as={NavLink} href="/categoria/infantil">Infantiles</Nav.Link>
              <Nav.Link as={NavLink} href="/categoria/adultos">Adultos</Nav.Link>
              <Nav.Link as={NavLink} href="/categoria/bautismo">Bautismo</Nav.Link>
              <Nav.Link as={NavLink} href="/categoria/comunion">Comunión</Nav.Link>
              <Nav.Link href="#cart"><CartWidget/></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet/>
        </>
    );
  }
  
  export default ColorSchemesExample;