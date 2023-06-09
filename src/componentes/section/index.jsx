
import './style.css';
import logo from '../../img/robsonataquebengadura.gif';
import ReactPlayer from 'react-player/youtube';
function Section() {
    return (

        <div className="paiSection">

            <section id="inicio" className="section01">
              
            </section>
            <section id="jogos" className="section02">
            <h2 className='tituloSection01'>Sobre</h2>
                <p className='textSection01'>
                    Realmakerstudio é um Studio indie de jogos de pixelart criada por João Vitor, um jovem empreendedor de 21 anos. Com uma paixão ardente pela arte dos pixels, a Realmakerstudio cria jogos encantadores que trazem à vida mundos retro com uma estética única. Sob a liderança de João Vitor, a equipe talentosa da empresa se dedica a criar experiências envolventes e cativantes para os jogadores. Com sua abordagem simples e charmosa, os jogos da Realmakerstudio são uma celebração da nostalgia e da criatividade, proporcionando momentos de diversão e emoção para os fãs de jogos indie.

                </p>
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