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
      <h2 className="text-3xl font-bold text-center mb-2 text-[var(--primario)] uppercase md:text-[87.49px] font-[cenzo] mt-8">
        Procesos Pop Terry
      </h2>
      <ProcesosPopTerry />
      <Contactanos />
      <Footer />
    </>
  );
};

export default App;
