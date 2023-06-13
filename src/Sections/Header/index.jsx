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
                <div style={{width: "20px"}}/> {/*Espaçamento*/}
                <FilledButton text={"Entrar"} />
            </div>
        </header>
    )
}
export default Header;