import React from 'react'; 
import './mainContainer.css';
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../../assets/img/matheus.png'
import Navbar from '../navbar/Navbar';
const MainContainer = () => {

    return (
       
        <div>
            <Navbar></Navbar>
        <div className='main-container'>
            <div className='row corpo'>
                <div className='background-preto '>
                    <div className='col-lg-6 container-texto'>

                    <h4 className=' fonte-titulo'>A sua Marca fala mais que mil palavras!</h4>
                    <p className=' fonte-descricao'>E a minha missão é traduzir a sua essência nela, para que você consiga se comunicar do jeito certo com o seu público.</p>
                    </div>
                    <div className='col-lg-6'>
                  <img className='foto-main-container' src={foto} alt='foto matheus'></img>

                    </div>
                    {/* Botões na borda inferior */}
                    </div>
                    <div className="button-container">
                        <Button variant="outline-light" className="nav-button-servicos">Serviços</Button>
                        <Button variant="outline-light" className="nav-button-orcamentos">Orçamentos</Button>
                        <Button variant="outline-light" className="nav-button-sobre">Sobre mim</Button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MainContainer;
