import React from 'react'; 
import './mainContainer.css';
import { Image, Button} from 'react-bootstrap'; 
import foto from '../../assets/img/matheus.webp'
import 'bootstrap/dist/css/bootstrap.min.css';


const MainContainer =()=>{
    return(
        <div className='container '>
        <div className='row corpo'>
      
          <div className='col-md-6'>
            <Image className='foto' src={foto}  alt="Descrição da imagem" />
          </div>
        
          <div className='col-md-6 background-verde'>
            <h4 className='fonte-titulo '>Sua Marca fala mais que mil palavras!</h4>
            <Button className='botao'>Vamos transformar sua marca?</Button>
          </div>
        </div>
      </div>
     
    )
}

export default MainContainer; 