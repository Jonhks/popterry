import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ProductosSection from "./components/ProductosSection";
import ProcesosPopTerry from "./components/ProcesosPopTerry";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductosSection />
      <ProcesosPopTerry />
      <Contactanos />
      <Footer />
    </>
  );
};

export default App;
