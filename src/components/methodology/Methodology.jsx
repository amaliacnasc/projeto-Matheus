import React from 'react';
import './methodology.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
const Methodology = () => {
    return (
        <div className=' container-metodologia'>
            <div>
            
            <div className='row container-metodologia'>
                <h2 className='titulo-metodologia'>Minha Metodologia</h2>
                <div className='container-botao'>
                    <p className='fonte-ver-mais text-white'>Ver mais</p>
                    <button className='botao-metodologia'>
                        <FontAwesomeIcon className='seta' icon={faArrowUpLong} />
                        {' '}

                    </button>
                </div>
                <div class="linha-metodologia"></div>
            </div>
           
            </div>
            
        </div>
    )
}
export default Methodology;