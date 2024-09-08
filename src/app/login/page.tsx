"use client"; // Marcar como componente del cliente

import { motion } from "framer-motion";
import Image from "next/image"; // Importar el componente de Next.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <motion.div
        className="relative flex items-center justify-center min-h-screen bg-gray-50"
        initial={{ y: -1000 }} // Posición inicial arriba
        animate={{ y: 0 }} // Deslizar hacia abajo
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        {/* Imagen en el borde inferior derecho */}
        <Image
          src="/login-image.svg" // Ruta de la imagen
          alt="Login Illustration"
          width={200}
          height={200}
          className="absolute bottom-0 right-0 m-4" // Posicionamiento
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default Login;
