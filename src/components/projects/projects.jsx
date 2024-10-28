import React from 'react';
import './projects.css';
import projeto1 from '../../assets/img/projeto1.avif';
import projeto2 from '../../assets/img/projeto2.avif';
import projeto3 from '../../assets/img/projeto3.avif';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectData = [
    {
        src: projeto1,
        titulo: 'Dr. Clayton Guimarães', 
        alt: 'Imagem de projeto 1',
        legend: 'Dr. Clayton Guimarães, Projeto de criação de marca e identidade visual',
        link: 'https://behance.net/gallery/209754133/Dr-Clayton-Guimaraes?tracking_source=search_projects|theushmdesign&l=1',
    },
    {
        src: projeto2,
        titulo: 'Harmony Hues', 
        alt: 'Imagem de projeto 2',
        legend: 'Harmony Hues, Mobile | Banking',
        link: 'https://www.behance.net/gallery/197626395/Basthidores-Identidade-Visual-Producao-de-eventos?tracking_source=search_projects|theushmdesign&l=6',
    },
    {
        src: projeto3,
        titulo: 'Branding', 
        alt: 'Construção de branding, Naming e Identidade de marca',
        legend: 'Construção de branding, Naming e Identidade de marca',
        link: 'https://www.behance.net/gallery/169156919/Agencia-Mandacaru-Identidade-Visual?tracking_source=search_projects|theushmdesign&l=2',
    },
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className='w-3/4 m-auto container-projetos'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {projectData.map((item, index) => (
                        <div key={index} className='background-projeto'>
                            <img src={item.src} alt={item.alt} className='responsive-img' />
                            <div className='hover-overlay'>
                                <p className='text-xl font-semibold'>{item.titulo}</p>
                                <p className='text-sm'>{item.legend}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
