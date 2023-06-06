
import './style.css';
import logo from '../../img/robsonataquebengadura.gif';
function Section() {
    return (

        <div className="paiSection">

            <section id="inicio" className="section01">
                {/* <!-- Conteúdo da seção 02 --> */}
            </section>
            <section id="jogos" className="section02">
                {/*  <!-- Conteúdo da seção 01 --> */}
            </section>
            <section id="servicos" className="section03">
                <div>
                    <h3>Real Maker Studio</h3>
                    <p>Startup desenvolvedora de jogos indie para dispositivos móveis e PC.</p>
                    <img src={logo} alt="logo" />
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/watch?v=pKulmkhRRY0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </section>
        </div>

    )
}
export default Section;