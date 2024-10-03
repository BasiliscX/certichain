import { useState } from "react";
import { motion } from "framer-motion"; // Importar framer-motion

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Resetear el estado de error antes de enviar

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to send email. Please try again.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false); // Restablecer estado de éxito al cerrar
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }} // Estado inicial de opacidad
      animate={{ opacity: 1 }} // Estado de opacidad al mostrarse
      exit={{ opacity: 0 }} // Estado de opacidad al desaparecer
      transition={{ duration: 0.5 }} // Duración de la transición
    >
      <motion.div
        className="p-6 rounded-lg shadow-2xl max-w-lg w-full relative"
        style={{
          backgroundImage: "url('/contactform.svg')",
          backgroundSize: "cover",
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 0.8, opacity: 0 }} // Empieza más pequeño y con opacidad baja
        animate={{ scale: 1, opacity: 1 }} // Aparece con escala normal y opacidad completa
        transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave
      >
        <button
          className="absolute top-2 right-2 text-gray-700"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl text-gray-800 font-bold mb-4">Contact Form</h2>
        {success ? (
          <p className="text-green-600">Your message has been sent!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                className="border-4 border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline highlight-box"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="border-4 border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline highlight-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="border-4 border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline highlight-box"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="text-right">
              <button
                type="submit"
                className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700 text-white"
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
