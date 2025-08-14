import React from "react";
import { motion } from "framer-motion";

const Motion = motion.div;

const Modal = ({ imagen, texto, descripcion, onClose }) => (
  <div className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50">
    <Motion
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[var(--primario)] rounded-lg p-8 max-w-md w-full flex flex-col items-center"
    >
      <button
        className="absolute top-[-8px] right-2 text-[36px] text-white"
        onClick={onClose}
      >
        &times;
      </button>
      <div
        className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
        style={{ backgroundImage: `url(${imagen})` }}
      />
      <h2 className="text-3xl font-bold mb-2 text-white uppercase">{texto}</h2>
      <p className="text-white font-light text-[18px] text-justify">
        {descripcion}
      </p>
    </Motion>
  </div>
);

export default Modal;
