import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faBehance, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './rodape.css';

export default function Rodape() {
    // Função que lida com o clique no ícone do WhatsApp
    const handleWhatsAppClick = () => {
        const phoneNumber = '5581997399003';  // Número de telefone (sem traços)
        const message = 'Olá Matheus, gostaria de solicitar um orçamento.';  // Mensagem personalizada
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');  // Abre o link em uma nova aba
    };

    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 footer-col">
                        <button onClick={handleWhatsAppClick} className="footer-link">
                            <FontAwesomeIcon icon={faWhatsapp} /> Contato
                        </button>
                      <p></p>
                  
                        <p>
                            <a href="https://www.behance.net/theushmdesign" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <FontAwesomeIcon icon={faBehance} /> Behance
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/theushmdesign" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/theushmdesign/" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <FontAwesomeIcon icon={faInstagram} /> Instagram
                            </a>
                            <p className='mt-2'>
                            <a href="/projetos" className="footer-link">
                                Veja todos os meus projetos
                            </a>
                        </p>
                        </p>
                    </div>

                    <div className="col-lg-10 footer-col">
                      
                        <p>© 2024 Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
