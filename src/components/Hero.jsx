import React from "react";
import logo from "../assets/logo.png"; // Cambia por tu logo
import imagenHero from "../assets/model-placeholder.png"; // Cambia por tu imagen principal
import { motion } from "framer-motion";
const isMobile = window.innerWidth < 768;

const Hero = () => {
  const Motion = motion.section;

  return (
    <Motion
      initial={{ opacity: 0, y: -100 }} // Comienza abajo y transparente
      whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
      transition={{ duration: 1.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section
        id="nosotros"
        className="relative w-full h-[80vh] landscape:h-[150vh] flex flex-col"
      >
        {/* Mitad superior */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--primario)] z-0" />
        {/* Mitad inferior */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 z-0" />

        {/* Contenido superior */}
        <div className="relative z-10 flex flex-1 items-center justify-center px-8 py-[2rem] mt-[2.5rem] md:w-[95%] md:mx-auto">
          {/* Texto a la izquierda */}
          <div className=" w-1/2 md:w-1/3 text-left md:pl-[8rem] l">
            <h1 className="text-2xl font-bold text-white drop-shadow-lg font-[cenzo] md:text-[50px]">
              COMODIDAD
            </h1>
            <span className="mt-1 text-[12px] text-white drop-shadow p-1 pt-1 px-2 rounded-[50px] bg-[var(--secundario)] font-[chillax-m] md:text-[18px] landscape:text-sm leading-[29.04px] tracking-[.1em] md:tracking-[.5em]">
              PARA TODA LA
            </span>
            <p className="mt-1 text-[16px] text-white drop-shadow font-[cenzo] md:text-[45px]">
              LA FAMILIA
            </p>
          </div>
          {/* Imagen centrada, justo en el borde */}
          {/* <div className="w-1/3 hidden md:block md:flex justify-center relative mt-2"> */}
          <div className="w-1/3  justify-center relative">
            <img
              src={imagenHero}
              alt="Hero"
              className="h-[50vh] w-[100%] object-contain"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: isMobile
                  ? "translate(-35%, -50%)"
                  : "translate(-50%, -27%)",
              }}
            />
          </div>
          {/* Logo a la derecha */}
          <div className="w-1/2 md:w-1/3 hidden md:flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-30 w-30 md:h-50 md:w-50"
            />
          </div>
        </div>

        {/* Contenido inferior */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-1/2 pt-6 md:pt-34">
          <img
            src={logo}
            alt="Logo"
            className=" h-30 w-30 md:h-45 md:w-45 mx-7"
          />
          {/* <FaStar className="text-4xl text-blue-700 mb-2" /> */}
          <div className="w-[90%] md:w-[50%] text-xl font-light font-[verdana] text-[12px] md:text-[16px] p-2 text-center md:text-justify">
            <p className="font-bold mb-1">Textiles que abrazan tu día a día.</p>
            En Pop Terry diseñamos y fabricamos toallas, sábanas y batas con
            calidad superior, desde el hilo hasta el empaque. Somos una marca
            100% mexicana que pone el confort, la durabilidad y el estilo al
            alcance de tu hogar.
          </div>
        </div>
      </section>
    </Motion>
  );
};

export default Hero;
