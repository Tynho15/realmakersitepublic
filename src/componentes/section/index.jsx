
import './style.css';
import logo from '../../img/robsonataquebengadura.gif';
import ReactPlayer from 'react-player/youtube';
function Section() {
    return (

        <div className="paiSection">

            <section id="inicio" className="section01">
                {/* <!-- Conteúdo da seção 01 --> */}
            </section>
            <section id="jogos" className="section02">
                {/*  <!-- Conteúdo da seção 02 --> */}
            </section>
            <section id="servicos" className="section03">
                <div className="content">
                    <h3>Real Maker Studio</h3>
                    <p>Startup desenvolvedora de jogos indie para dispositivos móveis e PC.</p>
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <ReactPlayer playing="true" width="640px" height="360px" controls="true" url='https://www.youtube.com/watch?v=pKulmkhRRY0' />
            </section>
        </div>

    )
}
export default Section;