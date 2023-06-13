import './style.css';
import logo from '../../imagens/robsonataquebengadura.gif';
import ReactPlayer from 'react-player/youtube';
import FilledButton from '../../componentes/FilledButton';


function Section({text}) {
    return (

        <div className="paiSection">

            <section id="inicio" className="section01">
                <div className="left text">
                    <h1>Mira's Mansion</h1>
                    <p>
                        {text}
                    </p>
                    <div className="other">
                        <FilledButton text={"Ver mais"} />
                    </div>
                </div>
                <div className="right">

                </div>
            </section>
            <section id="sobre" className="section02">
                <div>
                    <h2 className='titulo'>Sobre</h2>
                    <p>Startup desenvolvedora de jogos indie para dispositivos móveis e PC.</p>
                    <p className='textSection01'>
                        <strong>Realmakerstudio</strong> é um Studio indie de jogos de pixelart criada por João Vitor, um jovem empreendedor de 21 anos. Com uma paixão ardente pela arte dos pixels, a Realmakerstudio cria jogos encantadores que trazem à vida mundos retro com uma estética única. Sob a liderança de João Vitor, a equipe talentosa da empresa se dedica a criar experiências envolventes e cativantes para os jogadores. Com sua abordagem simples e charmosa, os jogos da Realmakerstudio são uma celebração da nostalgia e da criatividade, proporcionando momentos de diversão e emoção para os fãs de jogos indie.
                    </p>
                </div>
            </section>
            <section id="ultimo-jogo" className="section03">
                <h2 className='titulo'>Último Jogo</h2>
                <div className='rth_1548'>
                    <div className="left video">
                        <ReactPlayer playing="true" width="640px" height="360px" controls="true" url='https://www.youtube.com/watch?v=pKulmkhRRY0' />
                    </div>
                    <div className="right rth_1549 ct_1549">
                        <div>
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                        <div className='rth_1549'>
                            <h3>Mira's Mansion Trailer</h3>
                            <p>Plataforma 2D com gráficos retrô, jogabilidade metroidvânia que você vai amar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Section;