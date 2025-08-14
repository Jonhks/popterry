import React, { useState } from "react";
import Card from "./Card";
import toallasImg from "../assets/img/toallas.jpg";
import bataImg from "../assets/img/Batas.jpg";
import sabanasImg from "../assets/img/sabanas.jpg";
import hiloImg from "../assets/img/hilo.png";
import { motion } from "framer-motion";
import Modal from "./Modal";

const cardsData = [
  {
    imagen: toallasImg,
    texto: "TOALLAS para baño",
    boton: "Leer más",
    descripcion:
      "Disfruta la suavidad y absorción que tu piel merece. Nuestras toallas están hechas con algodón de alta calidad, ideales para el uso diario y con diseños que combinan con cualquier estilo de baño. Calidad que se nota, desde el primer uso.",
  },
  {
    imagen: bataImg,
    texto: "Batas de baño",
    boton: "Leer más",
    descripcion:
      "Confort total al salir de la ducha. Las batas Pop Terry están elaboradas con tejidos esponjosos, ligeros y resistentes, para brindarte la sensación de un spa en casa. Disponibles en tallas y colores para toda la familia.",
  },
  {
    imagen: sabanasImg,
    texto: "sábanas",
    boton: "Leer más",
    descripcion:
      "Transforma tu descanso con sábanas frescas, suaves y duraderas. Diseñadas para ajustarse perfectamente y conservar su textura lavado tras lavado. La comodidad ideal para dormir mejor, noche tras noche.",
  },
  {
    imagen: hiloImg,
    texto: "Hilo",
    boton: "Leer más",
    descripcion:
      "Nuestros hilos de algodón son el corazón de cada pieza Pop Terry. Elaborados con procesos de alta precisión para asegurar consistencia, resistencia y la mejor base textil para cualquier desarrollo.",
  },
];

const Motion = motion.section;

const ProductosSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpenModal = (card) => {
    setModalContent(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <Motion
      initial={{ opacity: 0, y: 100 }} // Comienza abajo y transparente
      whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
      transition={{ duration: 1.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section
        id="productos"
        className="py-12 px-4 w-[90%] justify-center mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--primario)] uppercase md:text-[87.49px] font-[cenzo]">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 uppercase text-center">
          {cardsData.map((card, idx) => (
            <Card
              key={idx}
              {...card}
              onButtonClick={() => handleOpenModal(card)}
            />
          ))}
        </div>
        {modalOpen && (
          <Modal
            imagen={modalContent.imagen}
            texto={modalContent.texto}
            descripcion={modalContent.descripcion}
            onClose={handleCloseModal}
          />
        )}
      </section>
    </Motion>
  );
};

export default ProductosSection;
