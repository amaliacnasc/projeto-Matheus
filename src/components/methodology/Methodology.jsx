import React from 'react';
import './methodology.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import caminho from '../../assets/img/CAMINHO.svg';
const Methodology = () => {
    let verMaisClick = () => {
            
        let portfolioUrl = `https://www.behance.net/theushmdesign`;
    
        window.open(portfolioUrl, '_blank'); // Abre o link em uma nova aba
      };
    return (
        
        <div className=' container-metodologia'>
        
            <div>
            
            <div className='row container-metodologia'>
                <h2 className='titulo-metodologia'>Minha Metodologia</h2>
                <div className='container-botao'>
                    <p className='fonte-ver-mais text-white'>Ver mais</p>
                    <button className='botao-metodologia'onClick={verMaisClick}>
                        <FontAwesomeIcon className='seta' icon={faArrowUpLong} />
                        {' '}

                    </button>
                </div>
                <div class="linha-metodologia"></div>
             
            </div>
            <div className='div-caminho'>
                    <img src={caminho} alt='jornada usuario'></img>
                </div>
            </div>
            
        </div>
    )
}
export default Methodology;