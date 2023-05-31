
import './style.css';
import logo from '../../img/logo_01.png';
function Header(){
    return(
        <header className='Header01'>
            <img className='logoImg' src={logo} alt="logo site" />
        </header>
    )
}

export default Header;