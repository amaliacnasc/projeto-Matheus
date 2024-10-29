import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Servicos = () => {
    // Estado que mantém os itens abertos
    const [openItems, setOpenItems] = useState([]); 

    // Função para alternar visibilidade de um item
    const toggleItem = (item) => {
        setOpenItems(prevState =>
            prevState.includes(item)
                ? prevState.filter(i => i !== item)
                : [...prevState, item]
        );
    };

    // Dados dos serviços
    const servicesData = [
        { id: 'branding', number:'1', title: 'Branding', description: 'Dar significado e tornar significante... estratégias que criem conexões profundas com o público.' },
        { id: 'marca',  number:'2',  title: 'Marca', description: 'Construímos marcas únicas e estratégicas que comunicam com seu público.' },
        { id: 'identidade',  number:'3',  title: 'Identidade Visual', description: 'Conjunto de atributos gráficos que fortalecem a sua marca.' },
        { id: 'design',  number:'4',  title: 'Design & Identidade', description: 'Design para suas postagens nas redes sociais e vídeos institucionais.' },
    ];

    return (
        <div>
          <div className='container-servicos'>

         
            <div >
                {servicesData.map(service => (
                    <ServiceItem 
                        key={service.id}
                        number={service.number}
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        isOpen={openItems.includes(service.id)}
                        toggleItem={toggleItem}
                    />
                ))}
            </div>
            </div>
        </div>
    );
};

// Componente de item de serviço
const ServiceItem = ({ id, number, title, description, isOpen, toggleItem }) => (
    <div className="item">
        <div className='group-item'>
        <p className='number titulo-item'  onClick={() => toggleItem(id)}>{number}</p>
        <p className="titulo-item" onClick={() => toggleItem(id)}>
            {title}
        </p>
        <p className='titulo-item'  onClick={() => toggleItem(id)}> <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} /></p>
       
        </div>
        <div className={`texto-item-container ${isOpen ? 'open' : 'closed'}`}>
            <p className="texto-item col-lg-12">{description}</p>
        </div>
        <div class="linha"></div>
    </div>
);

export default Servicos;
