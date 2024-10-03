import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
<<<<<<< Updated upstream
import { Web3Provider } from "@/context/web3context/Web3Provider";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
=======
import Head from "next/head";
>>>>>>> Stashed changes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <body>
        <Web3Provider>
          <Header />
          <main>{children}</main>
          <Footer />
        </Web3Provider>
=======
      <Head>
        <title>Guillermo Navarro - Software Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Guillermo Navarro, a software developer experienced in web development, blockchain, and software engineering."
        />
        <meta
          name="keywords"
          content="Guillermo Navarro, Software Developer, Web Development, Blockchain, JavaScript, Node.js, React, Next.js"
        />
        <meta name="author" content="Guillermo Navarro" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Guillermo Navarro - Software Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Guillermo Navarro, showcasing projects in web development, blockchain, and more."
        />
        <meta property="og:image" content="./favicon.ico" />
        <meta property="og:url" content="https://navarroguillermo.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guillermo Navarro - Software Developer"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Guillermo Navarro, showcasing projects and expertise in web development."
        />
        <meta name="twitter:image" content="/images/contact-cover.png" />
        <link rel="canonical" href="https://navarroguillermo.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <Header />
        <main>{children}</main>
        <Footer />
>>>>>>> Stashed changes
      </body>
    </html>
  );
}
