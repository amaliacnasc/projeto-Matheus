import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, Image, Button } from 'react-bootstrap';
import logo from '../../assets/img/Vector.png';
import SparkleDot from '../sparkDot/SparkleDot';

const NavbarComponent = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5581997399003'; // Número de telefone no formato internacional (sem o "-")
    const message = 'Olá Matheus, gostaria de solicitar um orçamento.'; // Mensagem personalizada
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank'); // Abre o link em uma nova aba
  };

  return (
    <Navbar expand='lg' className='background'>
      <Container className='meu-container'>
        <Navbar.Brand href="#home">
          <Image className='logo' src={logo} alt="Logo" />
        </Navbar.Brand>

        <Nav.Link className='fonte' onClick={handleWhatsAppClick}>
          <Button className='botao-agenda'>
            <div className="agenda-content">
              <SparkleDot />
              <span className='agenda-fonte'>Agenda Aberta</span>
            </div>
          </Button>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
