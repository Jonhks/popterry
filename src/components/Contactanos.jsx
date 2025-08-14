import React from "react";

const Contactanos = () => (
  <section
    id="contacto"
    className="py-12 px-4 bg-gray-100"
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
      CONTÁCTANOS
    </h2>
    <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Toallas"
          className="rounded-lg w-64 object-cover h-100"
        />
      </div>
      {/* Formulario */}
      <form className="w-full md:w-1/2 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-gray-400 mb-2">
          CONÉCTATE CON NOSOTROS
        </h3>
        <input
          type="text"
          placeholder="Nombres"
          className="rounded-full bg-gray-100 px-4 py-2 outline-none"
        />
        <input
          type="text"
          placeholder="Apellidos"
          className="rounded-full bg-gray-100 px-4 py-2 outline-none"
        />
        <input
          type="text"
          placeholder="Celular"
          className="rounded-full bg-gray-100 px-4 py-2 outline-none"
        />
        <input
          type="email"
          placeholder="Correo"
          className="rounded-full bg-gray-100 px-4 py-2 outline-none"
        />
        <input
          type="text"
          placeholder="Servicio"
          className="rounded-full bg-gray-100 px-4 py-2 outline-none"
        />
        <textarea
          placeholder="Mensaje"
          className="rounded-2xl bg-gray-100 px-4 py-2 outline-none resize-none min-h-[60px]"
        />
        <button
          type="submit"
          className="self-end bg-red-500 text-white font-bold rounded-full px-6 py-2 mt-2 hover:bg-red-600 transition"
        >
          ENVIAR
        </button>
      </form>
    </div>
  </section>
);

export default Contactanos;
