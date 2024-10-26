import React from 'react'; 
import './mainContainer.css';
import { Image, Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    return (
        <div className=''>
            <div className='row corpo'>
                
                <div className='col-lg-12  background-preto d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='fonte-titulo'>Sua Marca fala mais que mil palavras!</h4>
                    <Button className='botao'>Vamos transformar sua marca?</Button>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;