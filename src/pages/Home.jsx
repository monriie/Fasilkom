import TopBar from '../components/TopBar';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import Prodi from './Prodi'
import { useEffect, useState } from 'react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Height of hero section

      // TopBar visibility
      if (currentScrollY > 50) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-40">
        <TopBar isVisible={isTopBarVisible} />
      </div>

      <Hero />
      <Navbar isFixed={isNavbarFixed} isVisible={isNavbarVisible} />
      <Prodi/>
    </div>
  );
};

export default Home;