import "./globals.css";
import { Web3Provider } from "@/context/web3context/Web3Provider";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>
          <Header />
          <main>{children}</main>
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
