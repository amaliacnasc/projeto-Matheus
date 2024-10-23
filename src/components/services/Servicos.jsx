import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Servicos = () => {
    // Estado que mantém os itens abertos
    const [openItems, setOpenItems] = useState(['branding']); // 'branding' aberto por padrão

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
        { id: 'branding', title: 'Branding', description: 'Dar significado e tornar significante... estratégias que criem conexões profundas com o público.' },
        { id: 'marca', title: 'Marca', description: 'Construímos marcas únicas e estratégicas que comunicam com seu público.' },
        { id: 'identidade', title: 'Identidade Visual', description: 'Conjunto de atributos gráficos que fortalecem a sua marca.' },
        { id: 'design', title: 'Design & Identidade', description: 'Design para suas postagens nas redes sociais e vídeos institucionais.' },
    ];

    return (
        <div className="corpo-servicos container">
            <h2 className="titulo">O que você encontra aqui?</h2>
            <div className="conteudo col-lg-10">
                {servicesData.map(service => (
                    <ServiceItem 
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        isOpen={openItems.includes(service.id)}
                        toggleItem={toggleItem}
                    />
                ))}
            </div>
        </div>
    );
};

// Componente de item de serviço
const ServiceItem = ({ id, title, description, isOpen, toggleItem }) => (
    <div className="item">
        <p className="titulo-item" onClick={() => toggleItem(id)}>
            {title}
            <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} />
        </p>
        <div className={`texto-item-container ${isOpen ? 'open' : 'closed'}`}>
            <p className="texto-item">{description}</p>
        </div>
    </div>
);

export default Servicos;
