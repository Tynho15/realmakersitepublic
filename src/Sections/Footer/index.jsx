import React from 'react';
import './style.css';


function Footer() {
    return (
        <footer class="rodape">
            <div className="margin">
                <div class="Footer">
                    <ul class="textTituloFooter ul-left">
                        <li class="titleFooter"><h3>Sobre</h3></li>
                        <li class="textFooter"><a href="https://twitter.com/RealMakerStudio">Empresa</a></li>
                        <li class="textFooter"><a href="https://twitter.com/RealMakerStudio">Equipe</a></li>
                        <li class="textFooter"><a href="https://twitter.com/RealMakerStudio">Legado</a></li>
                    </ul>
                    <ul class="textTituloFooter ul-right">
                        <li class="titleFooter"><h3>Redes Sociais</h3></li>
                        <li class="textFooter"><a href="https://www.facebook.com/RealMakerStudio">Facebook</a></li>
                        <li class="textFooter"><a href="https://www.youtube.com/channel/UCIYWGxeuVXfvL7n4hlvEJJg">Youtube</a></li>
                        <li class="textFooter"><a href="https://www.instagram.com/realmakerstudio/">Instagram</a></li>
                        <li class="textFooter"><a href="https://twitter.com/RealMakerStudio">Twitter</a></li>
                    </ul>
                </div>

                <div class="copyright">
                    <div className='barra'></div>
                    <h4>Real Maker Studio &copy; 2021-2023</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;