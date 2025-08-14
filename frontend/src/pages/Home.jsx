import TopBar from "../components/hero/Topbar";
import Navigasi from "../components/hero/Navigasi";
import Hero from "../components/hero/Hero";
import Navbar from "../components/Navbar";
import Prodi from "./section/Prodi";
import Akademik from "./section/Akademik";
import { useEffect, useState } from "react";
import KelPenelitian from "./section/KelPenelitian";
import Mahasiswa from "./section/Mahasiswa";
import Beasiswa from "./section/Beasiswa";
import Ormawa from "./section/Ormawa";
import Footer from "../components/Footer";
import Berita from "./section/Berita";
import Agenda from "./section/Agenda";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    // Set initial hero height
    const updateHeroHeight = () => {
      setHeroHeight(window.innerHeight);
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);

    return () => window.removeEventListener("resize", updateHeroHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // TopBar visibility - hide earlier on mobile
      const topBarThreshold = window.innerWidth < 768 ? 30 : 50;
      setIsTopBarVisible(currentScrollY <= topBarThreshold);

      // Navbar behavior
      if (currentScrollY > heroHeight) {
        setIsNavbarFixed(true);
        // Show/hide fixed navbar based on scroll direction
        if (currentScrollY > scrollY && currentScrollY > heroHeight + 100) {
          // Scrolling down - hide navbar
          setIsNavbarVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsNavbarVisible(true);
        }
      } else {
        setIsNavbarFixed(false);
        setIsNavbarVisible(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, heroHeight]);

  return (
    <div className="max-h-screen">
      <div
        className={`
          fixed top-0 left-0 right-0 z-40
          ${isTopBarVisible ? "translate-y-0" : "-translate-y-full"}
          transition-transform duration-300
        `}
        role="banner"
      >
        <TopBar isVisible={isTopBarVisible} />

      </div>

      <main>
        <Navigasi/>
        <Hero />

        <nav
          className={`
            ${isNavbarFixed ? "h-16 sm:h-20" : ""}
          `}
        >
          <Navbar isFixed={isNavbarFixed} isVisible={isNavbarVisible} />
        </nav>

        {/* Content sections */}
        <Prodi />
        <Akademik />
        <KelPenelitian />
        <section id="Mahasiswa" className="flex flex-col px-4 pt-8 pb-4 items-center justify-around md:flex-row lg:flex-row">
          <Mahasiswa/>
          <div className="md:h-100 lg:h-100 md:border-2 md:border-[#D3D3D3] md:rounded-2xl lg:border-2 lg:border-[#D3D3D3] lg:rounded-2xl"/>
          <Beasiswa/>
        </section>
        <Ormawa/>
        <section id="Informasi" className="flex flex-col items-center justify-center p-4 lg:px-16">
          <Berita/>
          <Agenda/>
        </section>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
