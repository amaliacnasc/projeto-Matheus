import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import logo from '../../assets/img/ÍCONE.png';

const NavbarComponent = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5581997399003'; // Número de telefone no formato internacional (sem o "-")
    const message = 'Olá Matheus, gostaria de solicitar um orçamento.'; // Mensagem personalizada
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Abre o link em uma nova aba
  };

  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href="#home">
          <Image className='logo' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto nav-links'>
            <Nav.Link href="https://www.behance.net/theushmdesign" target="_blank" rel="noopener noreferrer" className="fonte">
              Portfolio
            </Nav.Link>
            
            <Nav.Link className='fonte' onClick={handleWhatsAppClick}>
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
