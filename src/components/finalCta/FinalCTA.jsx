import React from 'react';
import { Button } from 'react-bootstrap'; 
import './finalCta.css';

export default function FinalCTA() {
    const handleWhatsAppClick = () => {
        const phoneNumber = '558199739-9003';
        const message = 'Olá Matheus, gostaria de solicitar um orçamento.'; // Mensagem personalizada que aparecerá no WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank'); // Abre o link em uma nova aba
    };

    return (
        <div className='container background-finalcta mt-5'>
            <div className='row'>
                <h2 className='text-center fonte-finalcta'>Vamos traduzir a essência da sua marca em algo único, que se destaque e a transforme em um case de sucesso!</h2>
                <div className='center-botao mt-3'>
                    <Button className='botao' onClick={handleWhatsAppClick}>Preciso de uma marca única!</Button>
                </div>
            </div>
        </div>
    );
}
