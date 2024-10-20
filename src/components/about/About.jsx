import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import foto from '../../assets/img/matheus.webp';
import './about.css'

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);  // Estado para controlar o "Ler mais"

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);  // Alterna entre expandir e recolher o texto
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-10 col-md-8 col-sm-4'>
                <h2 className='text-center p-3 '>Sobre mim</h2>
                    <div className='container-foto'>
                        <Image className='img-fluid foto' src={foto} alt='foto matheus'></Image>
                    </div>
                
                    <p>Olá, eu sou o Matheus mas pode me chamar de Theus. Sou um Designer apaixonado, formado e pós-graduado na área.</p>
                    <p>Com mais de 8 anos de experiência ajudando diversas empresas e profissionais a traduzirem suas essências em marcas únicas e de destaque.</p>
                    <p className={`hidden-content ${isExpanded ? 'show' : ''}`}>
                        Meu propósito é ir além da estética e focar no modelo de negócio dos meus clientes, para assim combinar design com estratégia e projetar soluções visuais que transformarão meus clientes em referências em seus nichos de atuação. Será um prazer trabalhar com você!
                    </p>
                
             
                    {!isExpanded && (
                        <span className="ler-mais" onClick={handleExpandClick}>
                            Ler mais
                        </span>
                    )}
                    {/* Botão "Ler menos" quando o conteúdo estiver expandido */}
                    {isExpanded && (
                        <span className="ler-mais" onClick={handleExpandClick}>
                            Ler menos
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
