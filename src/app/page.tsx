import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to CertiChain</h1>
        <p className="text-xl mb-6">
          Revolutionizing student credential validation using Soulbound Tokens.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/auth/login"
            className="px-6 py-2 bg-blue-600 text-white rounded"
          >
            Login / Signup for Teachers
          </Link>

          <Link
            href="/view-sbt"
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            View SBT for Students
          </Link>
        </div>
      </section>
    </div>
  );
}
