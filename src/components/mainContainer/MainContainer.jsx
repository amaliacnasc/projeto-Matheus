import React from 'react'; 
import './mainContainer.css';
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    return (
        <div className='main-container'>
            <div className='row corpo'>
                <div className='col-lg-12 background-preto d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='col-lg-6 fonte-titulo'>A sua Marca fala mais que mil palavras!</h4>
                    <p className='col-lg-6 fonte-descricao'>E a minha missão é traduzir a sua essência nela, para que você consiga se comunicar do jeito certo com o seu público.</p>
                    {/* Botões na borda inferior */}
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
