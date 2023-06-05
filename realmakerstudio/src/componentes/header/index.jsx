
import './style.css'
import imglogo from '../../img/logo_01.png';
function Header(){
    return(
        <header>
        <img className="logoImg" src={imglogo} alt="Logo" />
        <div className="lupaPesquisa">
            <input className="lupaPesquisa_01" type="search" placeholder="Pesquisar"/>
        </div>
        <nav className="navHeader">
            <a className="textHeader" href="#jogos">Jogos</a>
            <a className="textHeader" href="#inicio">Início</a>
            <a className="textHeader" href="#servicos">Serviços</a>
            <a className="textHeader" href="#sobre">Sobre</a>
        </nav>
    </header>
    )
}
export default Header;