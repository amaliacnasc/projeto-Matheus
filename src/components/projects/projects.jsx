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
        legend: 'Dr. Clayton Guimarães, Projeto de criação de marca e identidade visual'
    },
    {
        src: projeto2,
        alt: 'Imagem de projeto 2',
        legend: 'Harmony Hues, Mobile | Banking'
    },
    {
        src: projeto3,
        alt: 'Construção de branding, Naming e Identidade de marca',
        legend: 'Construção de branding, Naming e Identidade de marca'
    }
];

export default function Projects() {
    return (
        <div className="corpo-projetos">
            <div className="projetos">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
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
