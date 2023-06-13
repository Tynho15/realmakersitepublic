import Body from "./Sections/Body";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";

function App() {
    return (
        <div>
            <Header />
            <Body text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil fugit asperiores tempora pariatur facilis voluptatum ut? Veniam hic eveniet autem aliquam quod labore saepe sapiente, quo suscipit deleniti ab!"
                } />
            <Footer />
        </div>

    )
}
export default App;