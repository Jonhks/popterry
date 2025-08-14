import React from "react";
import Card from "./Card";

const cardsData = [
  {
    imagen: "https://via.placeholder.com/300x160?text=Producto+1",
    texto: "TOALLAS",
    boton: "Ver más",
  },
  {
    imagen: "https://via.placeholder.com/300x160?text=Producto+2",
    texto: "Hilo",
    boton: "Ver más",
  },
  {
    imagen: "https://via.placeholder.com/300x160?text=Producto+3",
    texto: "sábanas",
    boton: "Ver más",
  },
  {
    imagen: "https://via.placeholder.com/300x160?text=Producto+4",
    texto: "eco",
    boton: "Ver más",
  },
];

const ProductosSection = () => (
  <section
    id="productos"
    className="py-12 px-4 bg-blue-50"
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-[var(--primario)] uppercase">
      Nuestros Productos
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 uppercase text-center">
      {cardsData.map((card, idx) => (
        <Card
          key={idx}
          {...card}
        />
      ))}
    </div>
  </section>
);

export default ProductosSection;
