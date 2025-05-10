import React, { useRef, useState } from 'react';
import '../styles/ContactUs.css';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('tu_service_id', 'tu_template_id', form.current, 'tu_public_key').then(
      () => {
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 5000);
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contactus" className="pt-20 pb-20 bg-black text-white scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Formulario */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">Contactanos</h2>
          <p className="text-xl mb-8 text-center lg:text-left">
            Si compartís la adrenalina por crear y buscás el desafío constante, hablamos el mismo
            idioma.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2 text-lg">Nombre</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Mensaje</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              ></textarea>
            </div>
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 px-6 rounded text-lg"
              >
                Enviar mensaje
              </button>
              {sent && <p className="mt-4 text-green-400">¡Mensaje enviado con éxito!</p>}
            </div>
          </form>

          <div className="mt-10 text-center lg:text-left text-lg">
            <p>DSW Solutions - Buenos Aires - Argentina</p>
            <a className="text-indigo-400 hover:underline" href="mailto:info@dswsolutions.com.ar">
              info@dswsolutions.com.ar
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://www.ceiac.edu.ar/wp-content/uploads/2025/04/5-Websites-to-start-your-freelance-career-2048x1152.jpg"
            alt="Contactanos"
            className="rounded-xl shadow-lg max-w-[90%] lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
