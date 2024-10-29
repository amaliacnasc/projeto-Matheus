import React from 'react';
import logotipo from '../../assets/img/LOGO-COMPLETO.png';
import './rodape.css';

export default function Rodape() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="direitos col-lg-3">
                        <p>© Theus Design 2024.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>
                    <div className="logotipo col-lg-6">
                        <img src={logotipo} alt="logotipo" className="logo-img" />
                    </div>
                    <div className="links col-lg-3">
                        <p className="link">FAQ</p>
                        <p className="link">NEWSLETTER</p>
                        <p className="link">BLOG</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
