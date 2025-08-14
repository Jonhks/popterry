import React, { useState } from "react";
import toallas from "../assets/img/toallas.jpg";

const Contactanos = () => {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    celular: "",
    correo: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes guardar, enviar o procesar la info
    console.log(form);
  };

  return (
    <section
      id="contacto"
      className="py-12 px-4 bg-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-2 text-[var(--primario)] uppercase md:text-[87.49px] font-[cenzo] mt-8">
        CONTÁCTANOS
      </h2>
      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={toallas}
            alt="Toallas"
            className="rounded-lg w-64 object-cover h-100"
          />
        </div>
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold text-gray-400 mb-2">
            CONÉCTATE CON NOSOTROS
          </h3>
          <input
            type="text"
            name="nombres"
            placeholder="Nombres"
            value={form.nombres}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={form.apellidos}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={form.celular}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          <input
            type="text"
            name="servicio"
            placeholder="Servicio"
            value={form.servicio}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
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
};

export default Contactanos;
