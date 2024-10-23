import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import './projects.css';
import { FaArrowRight } from 'react-icons/fa'; // Ícone da seta

import projeto1 from '../../assets/img/projeto1.avif';
import projeto2 from '../../assets/img/projeto2.avif';
import projeto3 from '../../assets/img/projeto3.avif';

const projectData = [
    {
        src: projeto1,
        alt: 'Imagem de projeto 1',
        legend: 'Dr. Clayton Guimarães, Projeto de criação de marca e identidade visual',
        link: 'https://behance.net/gallery/209754133/Dr-Clayton-Guimaraes?tracking_source=search_projects|theushmdesign&l=1', // Link do projeto 1
    },
    {
        src: projeto2,
        alt: 'Imagem de projeto 2',
        legend: 'Harmony Hues, Mobile | Banking',
        link: 'https://www.behance.net/gallery/197626395/Basthidores-Identidade-Visual-Producao-de-eventos?tracking_source=search_projects|theushmdesign&l=6', // Link do projeto 2
    },
    {
        src: projeto3,
        alt: 'Construção de branding, Naming e Identidade de marca',
        legend: 'Construção de branding, Naming e Identidade de marca',
        link: 'https://www.behance.net/gallery/169156919/Agencia-Mandacaru-Identidade-Visual?tracking_source=search_projects|theushmdesign&l=2', // Link do projeto 3
    }
];

export default function Projects() {
    return (
        <div className="corpo-projetos container">
            <div className="projetos">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

const ProjectCard = ({ src, alt, legend, link }) => {
    const [hover, setHover] = useState(false);

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            <Card
                className="image-card"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Image className={`card-img ${hover ? 'hovered' : ''}`} src={src} alt={alt} />
                <div className={`overlay ${hover ? 'visible' : ''}`}>
                    <div className="legend-box">
                        <FaArrowRight className="arrow-icon" />
                        <Card.Text className="image-legend">{legend}</Card.Text>
                    </div>
                </div>
            </Card>
        </a>
    );
};
