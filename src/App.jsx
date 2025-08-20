import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ProductosSection from "./components/ProductosSection";
import ProcesosPopTerry from "./components/ProcesosPopTerry";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductosSection />
      <h2 className="text-2xl font-bold text-center mb-8 text-[var(--primario)] uppercase md:text-5xl font-[cenzo] tracking-[.1em] mt-8">
        PROCESOS DE FABRICACIÓN
      </h2>
      <ProcesosPopTerry />
      <Contactanos />
      <Footer />
      {/* <Modal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      /> */}
    </>
  );
};

export default App;
