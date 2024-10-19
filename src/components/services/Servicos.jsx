import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../services/Services.css';

export default function Servicos() {
    // Estado que mantém os itens abertos
    const [openItems, setOpenItems] = useState(['branding']); // Inicialmente, 'branding' está aberto

    // Função para alternar visibilidade de múltiplos itens
    const toggleItem = (item) => {
        setOpenItems(prevState =>
            prevState.includes(item)
                ? prevState.filter(i => i !== item) // Remove o item se ele já está aberto
                : [...prevState, item] // Adiciona o item se ele não está aberto
        );
    };

    return (
        <div className='corpo-servicos'>
            <h2 className='titulo'>O que você encontra aqui? </h2>
            <div className='conteudo col-lg-10'>
                
                <div className='item'>
                    <p className='titulo-item' onClick={() => toggleItem('branding')}>
                        Branding
                        <FontAwesomeIcon icon={openItems.includes('branding') ? faArrowUp : faArrowDown} />
                    </p>
                    <div
                        className={`texto-item-container ${openItems.includes('branding') ? 'open' : 'closed'}`}
                    >
                        <p className='texto-item'>
                            Dar significado e tornar significante, transforme a sua marca em um símbolo que represente valores, emoções e experiências únicas, através de estratégias que criem conexões profundas com o público e fortaleçam a identidade da empresa no mercado.
                        </p>
                    </div>
                </div>

                <div className='item'>
                    <p className='titulo-item' onClick={() => toggleItem('marca')}>
                        Marca
                        <FontAwesomeIcon icon={openItems.includes('marca') ? faArrowUp : faArrowDown} />
                    </p>
                    <div
                        className={`texto-item-container ${openItems.includes('marca') ? 'open' : 'closed'}`}
                    >
                        <p className='texto-item'>
                            Construímos marcas únicas e estratégicas que comunicam com seu público e te diferenciam dos seus concorrentes.
                        </p>
                    </div>
                </div>

                <div className='item'>
                    <p className='titulo-item' onClick={() => toggleItem('identidade')}>
                        Identidade Visual  
                        <FontAwesomeIcon icon={openItems.includes('identidade') ? faArrowUp : faArrowDown} />
                    </p>
                    <div
                        className={`texto-item-container ${openItems.includes('identidade') ? 'open' : 'closed'}`}
                    >
                        <p className='texto-item'>
                            Conjunto de atributos gráficos que vão acompanhar e fortalecer a sua marca, fazendo-a ser reconhecida em todos os lugares onde estiver presente.
                        </p>
                    </div>
                </div>

                <div className='item'>
                    <p className='titulo-item' onClick={() => toggleItem('design')}>
                        Design & Identidade
                        <FontAwesomeIcon icon={openItems.includes('design') ? faArrowUp : faArrowDown} />
                    </p>
                    <div
                        className={`texto-item-container ${openItems.includes('design') ? 'open' : 'closed'}`}
                    >
                        <p className='texto-item'>
                            Design para suas postagens nas redes sociais e edição de vídeos para reels e vídeos institucionais.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
