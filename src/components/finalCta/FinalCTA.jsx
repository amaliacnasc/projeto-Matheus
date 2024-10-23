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
        <div className='container'>
            <div className='row'>
                <h2 className='text-center'>Vamos juntos criar um novo case de sucesso!</h2>
                <div className='center-botao mt-3'>
                    <Button className='botao' onClick={handleWhatsAppClick}>Solicite um orçamento</Button>
                </div>
            </div>
        </div>
    );
}
