<<<<<<< Updated upstream
import HeroSection from "./hero/HeroSection";
import AboutSection from "./about/AboutSection";
import InfoSection from "./info/InfoSection";

export default function HomePage() {
  return (
    <div className="bg-gray-50 pt-16">
      <HeroSection />
      <AboutSection />
      <InfoSection />
    </div>
=======
import HeroSection from "./hero/Hero";
import AboutMeSection from "./about/AboutMeSection";
import GallerySection from "./gallery/GallerySection";
import ProfessionalJourney from "./professionaljourney/ProfessionalJourney";
import ContactSection from "./contact/ContactSection";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
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

        {/* Canonical URL */}
        <link rel="canonical" href="https://navarroguillermo.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Responsive Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-50 text-neutral-800 pt-16">
        <HeroSection />
        <div className="justify-center items-center">
          <AboutMeSection />
          <GallerySection />
          <ProfessionalJourney />
          <ContactSection />
        </div>
      </div>
    </>
>>>>>>> Stashed changes
  );
}
