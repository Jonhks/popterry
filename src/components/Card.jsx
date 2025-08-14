import React from "react";

const Card = ({ imagen, texto, boton }) => (
  <div className="rounded-[40px]  shadow-lg overflow-hidden flex flex-col">
    <img
      src={imagen}
      alt="Imagen"
      className="w-full h-60 object-cover p-5 bg-[var(--primario)]"
    />
    <div className="p-4 flex-1 flex flex-col justify-center items-center bg-[var(--primario)]">
      <p className="text-white font-[chillax-m] md:text-[40px] mb-4">{texto}</p>
      <button className="mt-auto bg-[var(--secundario)] text-[14px] text-white py-2 px-4 rounded-[50px] hover:bg-red-700 transition w-[60%]">
        {boton}
      </button>
    </div>
  </div>
);

export default Card;
