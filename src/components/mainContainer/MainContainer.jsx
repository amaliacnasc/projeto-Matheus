import React from 'react'; 
import './mainContainer.css';
import { Image, Button } from 'react-bootstrap'; 
import foto from '../../assets/img/matheus.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    return (
        <div className='container'>
            <div className='row corpo'>
                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                    <Image className='foto img-fluid ' src={foto} alt="Descrição da imagem" />
                </div>
                <div className='col-lg-6  background-verde d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='fonte-titulo'>Sua Marca fala mais que mil palavras!</h4>
                    <Button className='botao'>Vamos transformar sua marca?</Button>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;