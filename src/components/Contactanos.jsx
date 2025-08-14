import React, { useState } from "react";
import toallas from "../assets/img/toallas.jpg";
import emailjs from "emailjs-com";

const initialForm = {
  nombres: "",
  apellidos: "",
  celular: "",
  correo: "",
  servicio: "",
  mensaje: "",
};

const validate = (form) => {
  const errors = {};
  if (!form.nombres.trim()) errors.nombres = "Ingresa tu nombre";
  if (!form.apellidos.trim()) errors.apellidos = "Ingresa tu apellido";
  if (!/^[0-9]{10,}$/.test(form.celular)) errors.celular = "Celular inválido";
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.correo))
    errors.correo = "Correo inválido";
  if (!form.servicio.trim()) errors.servicio = "Servicio requerido";
  if (!form.mensaje.trim()) errors.mensaje = "Mensaje requerido";
  return errors;
};

const Contactanos = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Solo texto para nombres, apellidos y servicio
    if (["nombres", "apellidos", "servicio"].includes(name)) {
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/.test(value)) return;
    }
    // Solo números para celular
    if (name === "celular" && value && !/^[0-9]*$/.test(value)) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(validate(form)).length > 0) {
      setErrors(validate(form));
      return;
    }
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSending(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(() => {
          setSuccess("¡Correo enviado!");
          setForm(initialForm);
        })
        .catch(() => setSuccess("Error al enviar"))
        .finally(() => setSending(false));
    }
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
          {errors.nombres && (
            <span className="text-red-500 text-sm">{errors.nombres}</span>
          )}
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={form.apellidos}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          {errors.apellidos && (
            <span className="text-red-500 text-sm">{errors.apellidos}</span>
          )}
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={form.celular}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          {errors.celular && (
            <span className="text-red-500 text-sm">{errors.celular}</span>
          )}
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          {errors.correo && (
            <span className="text-red-500 text-sm">{errors.correo}</span>
          )}
          <input
            type="text"
            name="servicio"
            placeholder="Servicio"
            value={form.servicio}
            onChange={handleChange}
            className="rounded-full bg-gray-100 px-4 py-2 outline-none"
          />
          {errors.servicio && (
            <span className="text-red-500 text-sm">{errors.servicio}</span>
          )}
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className="rounded-2xl bg-gray-100 px-4 py-2 outline-none resize-none min-h-[60px]"
          />
          {errors.mensaje && (
            <span className="text-red-500 text-sm">{errors.mensaje}</span>
          )}
          <button
            type="submit"
            className="self-end bg-red-500 text-white font-bold rounded-full px-6 py-2 mt-2 hover:bg-red-600 transition"
            // disabled={sending || Object.keys(validate(form)).length > 0}
          >
            {sending ? "Enviando..." : "ENVIAR"}
          </button>
          {success && (
            <span className="text-green-600 text-sm mt-2">{success}</span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contactanos;
