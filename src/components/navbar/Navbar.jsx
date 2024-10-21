import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import logo from '../../assets/img/ÍCONE.png';

const NavbarComponent = () => {
  return (
    <Navbar expand='lg' >
      <Container>
        <Navbar.Brand href="#home">
          <Image className='logo' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto nav-links'>
            <Nav.Link className='fonte' href="#">Sobre</Nav.Link>
            <Nav.Link className='fonte' href="#">Feedbacks</Nav.Link>
            <Nav.Link className='fonte' href="#">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
