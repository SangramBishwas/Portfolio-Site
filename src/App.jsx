import { useEffect } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
    // Refresh AOS on component mount and when window is resized
    window.addEventListener('resize', AOS.refresh);
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('resize', AOS.refresh);
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <div className='lg:max-w-[1280px] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  )
}

export default App
