import React from "react";

const procesos = [
  {
    numero: 1,
    titulo: "Hilatura",
    descripcion:
      "Proceso en el cual se transforman los copos de algodón, en hilos finos de diferentes títulos (8, 12, 14, 20, etc.), utilizando procesos compactos de estiraje y torsión.",
  },
  {
    numero: 2,
    titulo: "Tejido",
    descripcion:
      "Departamento en el cual se entrelaza, por medio de ligaduras diferentes tipos de dibujos, para poder crear tejidos uniformes en varias presentaciones; ya sea tejido plano o tejido rizo.",
  },
  {
    numero: 3,
    titulo: "Acabado",
    descripcion:
      "Desarrollo químico de descrude, blanqueo y teñido de las diferentes telas y toallas generadas en el departamento de Tejido, cuidando la suavidad de los productos.",
  },
  {
    numero: 4,
    titulo: "Confección",
    descripcion:
      "Proceso final, de corte, confección y etiquetado, para la presentación y entrega de nuestros productos acabados pasando por todo el proceso anterior.",
  },
];

const ProcesoCard = ({ numero, titulo, descripcion }) => (
  <div className="relative bg-white rounded-[40px] shadow-lg p-6 pt-10 flex flex-col items-center text-center min-h-[220px]">
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white text-2xl font-bold shadow-lg border-4 border-white">
      {numero}
    </div>
    <h3 className="mt-6 mb-2 text-lg font-bold tracking-widest text-blue-700">
      {titulo.toUpperCase()}
    </h3>
    <p className="text-gray-700 text-sm leading-relaxed">{descripcion}</p>
  </div>
);

const ProcesosPopTerry = () => (
  <section
    id="procesos"
    className="py-12 px-4 bg-red-500"
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-white">
      Procesos Pop Terry
    </h2>
    <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {procesos.map((p) => (
        <ProcesoCard
          key={p.numero}
          {...p}
        />
      ))}
    </div>
  </section>
);

export default ProcesosPopTerry;
