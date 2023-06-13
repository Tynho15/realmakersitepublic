import Body from "./Sections/Body";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";

function App() {
    return (
        <div>
            <Header />
            <Body text={
                    "Um plataforma 2D com muitos mistérios para se desvendar. Explore o máximo de cômodos e desvende os mistérios que os guarda. Enfrente todos os inimigos da mansão mais assombrada dos games."
                } />
            <Footer />
        </div>
    )
}
export default App;