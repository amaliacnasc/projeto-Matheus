import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import './projects.css';
import { FaArrowRight } from 'react-icons/fa'; // Importando ícone da seta

import projeto1 from '../../assets/img/projeto1.avif';
import projeto2 from '../../assets/img/projeto2.avif';
import projeto3 from '../../assets/img/projeto3.avif';

export default function Projects() {
    return (
        <div className="corpo-projetos">
            <div className="projetos">
                <ProjectCard 
                    src={projeto1} 
                    alt="Imagem de projeto 1" 
                    legend="Dr. Clayton Guimarães, Projeto de criação de marca e identidade visual" 
                />
                <ProjectCard 
                    src={projeto2} 
                    alt="Imagem de projeto 2" 
                    legend="Harmony Hues, Mobile | Banking" 
                />
                <ProjectCard 
                    src={projeto3} 
                    alt="Imagem de projeto 3" 
                    legend="Construção de branding, Naming e Identidade de marca" 
                />
            </div>
        </div>
    );
}

const ProjectCard = ({ src, alt, legend }) => {
    const [hover, setHover] = useState(false);

    return (
        <Card
            className="image-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image className={`card-img ${hover ? 'hovered' : ''}`} src={src} alt={alt} />
            {hover && (
                <Card.ImgOverlay className="overlay">
                    <div className="legend-box">
                        <FaArrowRight className="arrow-icon" /> {/* Seta */}
                        <Card.Text className="image-legend">{legend}</Card.Text>
                    </div>
                </Card.ImgOverlay>
            )}
        </Card>
    );
};
