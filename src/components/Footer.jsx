import React from "react";
import logo from "../assets/logo.png"; // Cambia la ruta si tu logo es diferente

const Footer = () => (
  <footer className="bg-[var(--primario)] py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white text-center gap-8 md:gap-0">
      {/* Contacto */}
      <div className="flex-1">
        <p className="font-bold mb-1">CONTÁCTANOS</p>
        <p>(000) 000 00000</p>
        <p>(+00) 000 000 0000</p>
      </div>
      {/* Logo */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Logo Pop Terry"
          className="h-16 w-auto mb-2"
        />
        <p className="font-bold">DIAGONAL 00 0 00 00</p>
        <p>OF 000 &nbsp; CDMX, MÉXICO</p>
      </div>
      {/* WhatsApp */}
      <div className="flex-1">
        <p className="font-bold mb-1">ESCRÍBENOS</p>
        <div className="flex items-center justify-center gap-2">
          <span className="inline-block align-middle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle
                cx="16"
                cy="16"
                r="16"
                fill="#25D366"
              />
              <path
                d="M22.5 18.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.4-1.5-1.6-1.8-.2-.3 0-.5.1-.6.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.3 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7 0 1 .7 2 1.1 2.5.4.5 1.6 2.5 3.9 3.4.5.2.9.3 1.2.2.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1.1z"
                fill="#fff"
              />
            </svg>
          </span>
          <span>000 000 0000</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
