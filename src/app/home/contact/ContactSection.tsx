"use client";

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormOpen = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <section
        className="relative bg-gray-100 h-3/4 py-16"
        style={{
          backgroundImage: "url('/contactbkd.svg')",
          backgroundSize: "90vh",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 relative h-full flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://www.linkedin.com/in/navarro-guillermo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <AiFillLinkedin size={50} />
            </a>
            <a
              href="https://github.com/BasiliscX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600"
            >
              <AiFillGithub size={50} />
            </a>
            <a
              href="mailto:guillermonavarro@alunissage.tech"
              className="text-red-600 hover:text-red-800"
            >
              <AiOutlineMail size={50} />
            </a>
          </div>

          {/* Botón para abrir el formulario */}
          <button
            onClick={handleFormOpen}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact me
          </button>

          {/* Mostrar el formulario cuando showForm sea true */}
          {showForm && <ContactForm onClose={handleFormClose} />}
        </div>
      </section>
    </>
  );
};

export default ContactSection;
