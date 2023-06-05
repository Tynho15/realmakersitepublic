
import './style.css';
import logo from '../../img/robsonataquebengadura.gif';
function Section(){
    return(
            
    <div className="paiSection">
    <section id="jogos" className="section01">
       {/*  <!-- Conteúdo da seção 01 --> */}
    </section>
    <section id="inicio" className="section02">
        {/* <!-- Conteúdo da seção 02 --> */}
    </section>
    <section id="servicos" className="section03">
        <div>
            <h3>Real Maker Studio</h3>
            <p>Startup desenvolvedora de jogos indie para dispositivos móveis e PC.</p>
            <img src={logo} alt="logo" />
        </div>
    </section>
</div>

    )
}
export default Section;