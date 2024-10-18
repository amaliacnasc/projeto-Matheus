import React from 'react'; 
import  './Navbar.css'; 
import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import logo from '../../assets/img/ÍCONE.png';


const NavbarComponent =() => {

    return(
        <Navbar expand='lg' className=''>
            <Container className='display-f'>
                <Navbar.Brand  href="#home"><Image className='logo' src={logo} ></Image></Navbar.Brand>
                <div className='nav-links'>
                    <Nav.Link className='fonte' href="#">Sobre</Nav.Link>
                    <Nav.Link className='fonte' href="#">Feedbacks</Nav.Link>
                    <Nav.Link className='fonte' href="#">Contato</Nav.Link>
                </div>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent;