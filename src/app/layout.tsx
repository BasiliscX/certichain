import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="w-full py-4 bg-blue-500 text-white text-center">
          <h1 className="text-3xl font-bold">CertiChain</h1>
          <nav className="mt-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg mr-2"
            >
              Login / Signup for Teachers
            </Link>
            <Link
              href="/view-sbt"
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              View SBT for Students
            </Link>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="w-full py-4 bg-gray-900 text-white text-center">
          <p>© 2024 CertiChain. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
