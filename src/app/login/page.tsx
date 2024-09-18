"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useWeb3 } from "@/context/Web3Context";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

// Extend the Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: unknown;
  }
}

const Login = () => {
  const { ethAccount, connectMetaMask, disconnectMetaMask } = useWeb3();
  const buttonStyle =
    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white";

  const isClient = typeof window !== "undefined";

  return (
    <>
      <Header />
      <motion.div
        className="relative flex items-center justify-center min-h-screen bg-gray-50"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <div className="mt-6">
            {isClient && typeof window.ethereum !== "undefined" ? (
              ethAccount ? (
                <button
                  onClick={disconnectMetaMask}
                  className={`${buttonStyle} bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
                >
                  Disconnect MetaMask
                </button>
              ) : (
                <button
                  onClick={connectMetaMask}
                  className={`${buttonStyle} bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
                >
                  Connect MetaMask
                </button>
              )
            ) : (
              <p className="text-center text-sm text-red-600">
                MetaMask is not installed. Please install MetaMask to connect.
              </p>
            )}
            {ethAccount && (
              <p className="mt-2 text-center text-sm text-gray-600">
                Connected account: {ethAccount}
              </p>
            )}
          </div>
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
