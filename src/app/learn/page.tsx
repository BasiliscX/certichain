"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import topics from "./topics.json"; // Importar el JSON

export default function Learn() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Función para hacer scroll a la sección correspondiente
  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header />

      <div className="mt-20 flex flex-col min-h-screen">
        {/* Botón flotante para abrir el sidebar en todos los tamaños */}
        <button
          onClick={toggleSidebar}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full z-50 shadow-lg"
        >
          ☰ Topics
        </button>

        {/* Sidebar siempre visible con botón */}
        <aside
          className={`fixed top-0 left-0 w-3/4 md:w-1/4 h-full bg-gray-100 p-4 border-r shadow-lg transform transition-transform duration-300 z-50 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-600"
          >
            ✕ Close
          </button>
          <h2 className="text-lg font-semibold mb-4">Documentation Topics</h2>
          <ul className="mt-4">
            {topics.map((topic, index) => (
              <li key={index} className="mb-2">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    scrollToSection(index);
                    toggleSidebar(); // Cerrar el sidebar después de hacer clic
                  }}
                >
                  {topic.title}
                </button>
                {topic.subTopics.length > 0 && (
                  <ul className="ml-4 mt-2">
                    {topic.subTopics.map((subTopic, subIndex) => (
                      <li key={subIndex}>
                        <button
                          className="text-blue-400 hover:underline"
                          onClick={() => {
                            scrollToSection(index + subIndex + 1);
                            toggleSidebar(); // Cerrar el sidebar después de hacer clic
                          }}
                        >
                          {subTopic.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content area with all sections displayed */}
        <main className="flex-1 p-8 space-y-8">
          {topics.map((topic, index) => (
            <div key={index}>
              {/* Título principal */}
              <section ref={(el) => (sectionsRef.current[index] = el)}>
                <h1 className="text-3xl font-bold mb-4">{topic.title}</h1>
                <p className="text-gray-700">{topic.content}</p>
              </section>

              {/* Subtítulos y contenido */}
              {topic.subTopics.length > 0 && (
                <div className="ml-4 mt-6">
                  {topic.subTopics.map((subTopic, subIndex) => (
                    <section
                      key={subIndex}
                      ref={(el) =>
                        (sectionsRef.current[index + subIndex + 1] = el)
                      }
                      className="mt-4"
                    >
                      <h2 className="text-2xl font-semibold">
                        {subTopic.title}
                      </h2>
                      <p className="text-gray-600">{subTopic.content}</p>
                    </section>
                  ))}
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
