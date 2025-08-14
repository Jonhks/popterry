import Card from "./Card";
import toallasImg from "../assets/img/toallas.jpg";
import hiloImg from "../assets/img/hilo.avif";
import sabanasImg from "../assets/img/sabanas.jpg";
import ecoImg from "../assets/img/hilo.png";
import { motion } from "framer-motion";

const cardsData = [
  {
    imagen: toallasImg,
    texto: "TOALLAS",
    boton: "Leer más",
  },
  {
    imagen: hiloImg,
    texto: "Hilo",
    boton: "Leer más",
  },
  {
    imagen: sabanasImg,
    texto: "sábanas",
    boton: "Leer más",
  },
  {
    imagen: ecoImg,
    texto: "eco",
    boton: "Leer más",
  },
];

const Motion = motion.section;

const ProductosSection = () => (
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
          />
        ))}
      </div>
    </section>
  </Motion>
);

export default ProductosSection;
