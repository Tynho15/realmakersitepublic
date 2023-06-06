
import './style.css'
import React, { useState } from 'react';
import imglogo from '../../img/logo_01.png';
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header>
            <img className="logoImg" src={imglogo} alt="Logo" />
            <div className="menu">
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {isOpen && (
                    <ul className="menu-items">
                        <nav className="navHeader">
                            <a className="textHeader" href="#jogos">Jogos</a>
                            <a className="textHeader" href="#inicio">Início</a>
                            <a className="textHeader" href="#servicos">Serviços</a>
                            <a className="textHeader" href="#sobre">Sobre</a>
                        </nav>
                        <div className="lupaPesquisa">
                            <input className="lupaPesquisa_01" type="search" placeholder="Pesquisar" />
                        </div>
                    </ul>
                )}
            </div>
        </header>
    )
}
export default Header;