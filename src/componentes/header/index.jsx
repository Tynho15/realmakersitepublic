
import {SlGlobe} from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
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
            <SlGlobe className="icoGlobal"/>
            <div></div>
        </header>
    )
}
export default Header;

/*      <div className="menu">
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {isOpen && (
                    <ul className="menu-items">
                        <img className="logoImg" src={imglogo} alt="Logo" />
                        <nav className="navHeader">
                            <a className="textHeader" href="#jogos">Jogos</a>
                            <a className="textHeader" href="#inicio">Início</a>
                            <a className="textHeader" href="#servicos">Serviços</a>
                            <a className="textHeader" href="#sobre">Sobre</a>

                        </nav>
                        <div className="lupaPesquisa">
                            <input className="lupaPesquisa_01" type="search" placeholder="Pesquisar" />
                            <SlMagnifier className="icoLupa"/>
                        </div>
                        <button className='fazerLogin'>Fazer login</button>
                    </ul>
                )}
            </div> */