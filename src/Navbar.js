import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dices from './Img/headlogo.webp'
import "bootstrap/dist/css/bootstrap.min.css"

function BasicExample () {
  return (
    <div className='nod'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='p-0'>
        <Navbar.Brand href="#home"><img src={Dices }/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href='&'>Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default BasicExample;