import Body from "./Sections/Body";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Landing from "./Sections/Landing";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Landing />
      <Body />
      <Footer />
    </div>
  )
}
export default App;