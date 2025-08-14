import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-[var(--primario)] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
        {/* Hamburguesa móvil */}
        <button
          className="md:hidden mr-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
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
            className="text-white hover:text-[var(--secundario)] chillax-m text-[20.29px] leading-[24.35px]"
          >
            Nosotros
          </a>
          <a
            href="#productos"
            className="text-white hover:text-[var(--secundario)] chillax-m text-[20.29px] leading-[24.35px]"
          >
            Productos
          </a>
        </div>
        {/* Logo centrado */}
        <div className="flex justify-center flex-shrink-0 mx-4 md:mx-8">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-14 md:h-20 md:w-20"
          />
        </div>
        {/* Secciones derecha */}
        <div className="hidden md:flex flex-1 justify-around space-x-6">
          <a
            href="#procesos"
            className="text-white hover:text-[var(--secundario)] chillax-m text-[20.29px] leading-[24.35px]"
          >
            Procesos
          </a>
          <a
            href="#contacto"
            className="text-white hover:text-[var(--secundario)] chillax-m text-[20.29px] leading-[24.35px]"
          >
            Contacto
          </a>
        </div>
      </div>
      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-[var(--primario)] px-4 pb-4 flex flex-col items-center animate-fade-in">
          <a
            href="#nosotros"
            className="py-2 w-full text-center border-b border-white"
          >
            Nosotros
          </a>
          <a
            href="#productos"
            className="py-2 w-full text-center border-b border-white"
          >
            Productos
          </a>
          <a
            href="#procesos"
            className="py-2 w-full text-center border-b border-white"
          >
            Procesos
          </a>
          <a
            href="#contacto"
            className="py-2 w-full text-center"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
