import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'; 
import './projects.css';

export default function Titulo(){
    let verMaisClick = () => {
            
        let portfolioUrl = `https://www.behance.net/theushmdesign`;
    
        window.open(portfolioUrl, '_blank'); // Abre o link em uma nova aba
      };
    return(
<div className=' container-titulo-portfolio'>
         
            
            <div className=' container-titulo'>
     
                <div className='container-botao-portfolio'>
                <h2 className='titulo-portfolio'>Portfolio</h2>
                <div className='btn-portfolio' onClick={verMaisClick}>
                    <p className='fonte-ver-mais  ' >Ver mais</p>
                    <button className='botao-portfolio'>
                        <FontAwesomeIcon className='seta-portfolio' icon={faArrowUpLong} />
                        {' '}

                    </button>

                </div>
                </div>
                <div class="linha-portfolio"></div>
            </div>
           
            </div>)
            
      
}