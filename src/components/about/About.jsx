import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import foto from '../../assets/img/matheus.webp';
import './about.css';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="text-center p-3">Sobre mim</h2>
        <div className="about-content">
          <div className="about-photo">
            <Image className="img-fluid" src={foto} alt="Foto de Matheus" />
          </div>
          <div className="about-text">
            <p>Olá, eu sou o Matheus mas pode me chamar de Theus. Sou um Designer apaixonado, formado e pós-graduado na área.</p>
            <p>Com mais de 8 anos de experiência ajudando diversas empresas e profissionais a traduzirem suas essências em marcas únicas e de destaque.</p>
            <p className={`extra-content ${isExpanded ? 'show' : ''}`}>
              Meu propósito é ir além da estética e focar no modelo de negócio dos meus clientes, para assim combinar design com estratégia e projetar soluções visuais que transformarão meus clientes em referências em seus nichos de atuação. Será um prazer trabalhar com você!
            </p>
            <button className="toggle-button" onClick={handleExpandClick}>
              {isExpanded ? 'Ler menos' : 'Ler mais'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
