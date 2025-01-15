import Header from "./components/Headers/Header";
import "../src/index.css";
import Nav from "./components/Navegacion/Nav";
import SobreMi from "./components/SobreMi/SobreMi";
import Experiencia from "./components/Experiencia/Experiencia";
import Servicios from "./components/Services/Servicios";
import Portafolio from "./components/Portafolio/Portafolio";

import Contacto from "./components/Contact/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <SobreMi />
      <Experiencia />
      <Servicios />
      <Portafolio />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
