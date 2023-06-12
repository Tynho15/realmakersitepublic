
import imglogo from '../../imagens/logo_01.png';
import Button from "../../componentes/Button";
import FilledButton from '../../componentes/FilledButton';
import './style.css';


function Header() {
    return (
        <header>
            <div className="left">
                <img className="logo_img" src={imglogo} alt="logo"/>
            </div>
            <div className="right">
                <Button text={"INÍCIO"} active={true}/>
                <Button text={"JOGOS"}/>
                <Button text={"DISCORD"}/>
                <FilledButton text={"Entrar"} />
            </div>
            {/* <img className="logoImg" src={imglogo} alt="Logo" />
            <SlGlobe className="icoGlobal"/>
            <div></div> */}
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