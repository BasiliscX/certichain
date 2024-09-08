import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Learn() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-2xl text-center p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold  text-blue-900  mb-4">
            Learn More About CertiChain
          </h1>
          <p className="text-gray-600 text-lg">
            This page will be dedicated to documentation and guides about how to
            use CertiChain and integrate it into your processes. We aim to
            provide clear, concise resources to help you understand the platform
            and its capabilities.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
