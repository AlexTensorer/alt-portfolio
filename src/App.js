import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Technos from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Technos />
      <Contact />
      <SocialLinks />
      <Footer />      
    </div>
  );
}

export default App;
