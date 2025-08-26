import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--primario)]">
      <div className="max-w-7xl mx-auto px-4 flex items-center md:h-22 h-16 justify-between md:justify-around">
        {/* Hamburguesa móvil */}
        <button
          className="md:hidden mr-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Secciones izquierda */}
        <div className="hidden md:flex flex-1 justify-around space-x-6">
          <a
            href="#nosotros"
            className="text-white hover:underline underline-offset-4 chillax-l text-[.8rem] tracking-[.3rem]"
          >
            NOSOTROS
          </a>
          <a
            href="#productos"
            className="text-white hover:underline underline-offset-4 chillax-l text-[.8rem] tracking-[.3rem]"
          >
            PRODUCTOS
          </a>
        </div>
        {/* Logo centrado */}
        <div className="flex justify-center flex-shrink-0 mx-4 md:mx-8">
          <a href="#nosotros">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-14 md:h-17 md:w-20"
            />
          </a>
        </div>
        {/* Secciones derecha */}
        <div className="hidden md:flex flex-1 justify-around space-x-6">
          <a
            href="#procesos"
            className="text-white hover:underline underline-offset-4 chillax-l text-[.8rem] tracking-[.3rem]"
          >
            PROCESOS
          </a>
          <a
            href="#contacto"
            className="text-white hover:underline underline-offset-4 chillax-l text-[.8rem] tracking-[.3rem]"
          >
            CONTACTO
          </a>
        </div>
      </div>
      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-[var(--primario)] px-4 pb-4 flex flex-col items-center animate-fade-in">
          <a
            href="#nosotros"
            className="py-2 w-full text-center border-b border-white text-white"
            onClick={() => setOpen(!open)}
          >
            Nosotros
          </a>
          <a
            href="#productos"
            className="py-2 w-full text-center border-b border-white text-white"
            onClick={() => setOpen(!open)}
          >
            Productos
          </a>
          <a
            href="#procesos"
            className="py-2 w-full text-center border-b border-white text-white"
            onClick={() => setOpen(!open)}
          >
            Procesos
          </a>
          <a
            href="#contacto"
            className="py-2 w-full text-center text-white"
            onClick={() => setOpen(!open)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
