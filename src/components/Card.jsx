import React from "react";

const Card = ({ imagen, texto, boton }) => (
  <div className="bg-white rounded-[50px] shadow-lg overflow-hidden flex flex-col">
    <img
      src={imagen}
      alt="Imagen"
      className="w-full h-40 object-cover"
    />
    <div className="p-4 flex-1 flex flex-col justify-between">
      <p className="text-gray-800 mb-4">{texto}</p>
      <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-[50px] hover:bg-blue-700 transition">
        {boton}
      </button>
    </div>
  </div>
);

export default Card;
