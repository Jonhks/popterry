import React from "react";

const procesos = [
  {
    numero: 1,
    titulo: "Hilatura",
    descripcion:
      "Iniciamos con fibras de algodón seleccionadas y las convertimos en hilos de alta resistencia y uniformidad. Este proceso nos permite tener control total desde el origen, garantizando la calidad en cada producto.",
  },
  {
    numero: 2,
    titulo: "Tejido",
    descripcion:
      "Nuestros telares transforman el hilo en estructuras textiles firmes, suaves y consistentes. Ya sea rizo o plano, cada tejido es diseñado para brindar confort, durabilidad y estilo.",
  },
  {
    numero: 3,
    titulo: "Acabado",
    descripcion:
      "Aplicamos procesos de limpieza, suavizado, teñido y fijado con estándares de calidad que aseguran que el color, la textura y la suavidad se mantengan con el tiempo. Cada pieza refleja el compromiso con la excelencia.",
  },
  {
    numero: 4,
    titulo: "Confección",
    descripcion:
      "Finalizamos con un armado minucioso: cortes precisos, costuras reforzadas y acabados que cuidan hasta el más mínimo detalle. Es aquí donde nace el producto que llega a tu hogar, listo para usarse y durar.",
  },
];

const ProcesoCard = ({ numero, titulo, descripcion }) => (
  <div className="relative bg-white rounded-[40px] shadow-lg p-6 pt-10 flex flex-col items-center text-center min-h-[220px]">
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-[var(--primario)] text-white text-2xl font-bold shadow-lg border-4 border-white">
      {numero}
    </div>
    <h3 className="mt-6 mb-2 text-lg font-bold tracking-widest text-[var(--primario)]">
      {titulo.toUpperCase()}
    </h3>
    <p className="text-[var(--primario)] text-sm leading-relaxed">
      {descripcion}
    </p>
  </div>
);

const ProcesosPopTerry = () => (
  <section
    id="procesos"
    className="py-12 px-4 bg-[var(--secundario)]"
  >
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
