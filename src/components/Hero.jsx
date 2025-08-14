import React from "react";
import logo from "../assets/logo.png"; // Cambia por tu logo
import imagenHero from "../assets/model-placeholder.png"; // Cambia por tu imagen principal
import { motion } from "framer-motion";

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
        className="relative w-full h-[80vh] flex flex-col"
      >
        {/* Mitad superior */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--primario)] z-0" />
        {/* Mitad inferior */}
        <div className="absolute bottom-0 left-0 w-full h-1/2  z-0" />

        {/* Contenido superior */}
        <div className="relative z-10 flex flex-1 items-center justify-between px-8 py-[2rem]">
          {/* Texto a la izquierda */}
          <div className=" w-1/2 md:w-1/3 text-left ">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg font-[cenzo] md:text-[78.37px]">
              COMODIDAD
            </h1>
            <span className="mt-1 text-[14px] text-white drop-shadow p-1 pl-3 pr-3 rounded-[50px] bg-[var(--secundario)] font-[chillax-m] md:text-[24.50px] leading-[29.04px]">
              PARA TODA LA
            </span>
            <p className="mt-1 text-lg text-white drop-shadow font-[cenzo] md:text-[64.62px]">
              LA FAMILIA
            </p>
          </div>
          {/* Imagen centrada, justo en el borde */}
          {/* <div className="w-1/3 hidden md:block md:flex justify-center relative mt-2"> */}
          <div className="w-1/3 hidden md:block justify-center relative">
            <img
              src={imagenHero}
              alt="Hero"
              className="h-100 w-100 object-contain"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -30%)",
              }}
            />
          </div>
          {/* Logo a la derecha */}
          <div className="w-1/2 md:w-1/3 flex justify-end">
            <img
              src={logo}
              alt="Logo"
              className="h-30 w-30 md:h-70 md:w-70"
            />
          </div>
        </div>

        {/* Contenido inferior */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-1/2 py-[4rem]">
          <img
            src={logo}
            alt="Logo"
            className="h-45 w-45 mx-7"
          />
          {/* <FaStar className="text-4xl text-blue-700 mb-2" /> */}
          <p className="w-[90%] md:w-[50%] text-xl font-light font-[verdana] text-[12px] md:text-[16px] p-2">
            En POP TERRY nos enorgullecemos de ser una empresa mexicana
            comprometida con la calidad y la innovación, desarrollando productos
            que superan las expectativas de nuestros clientes. Gracias a nuestro
            esfuerzo constante, hemos construido una sólida red comercial que
            nos impulsa a seguir creciendo y posicionándonos como una marca
            referente en la industria de snacks en México.{" "}
          </p>
        </div>
      </section>
    </Motion>
  );
};

export default Hero;
