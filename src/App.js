import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Technos from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

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
