import { useEffect } from "react";
import Banner from "./Sections/Banner"
import Navbar from "./Sections/Navbar"
import Skills from "./Sections/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./Sections/About";
import Project from "./Sections/Project";
import Footer from "./Sections/Footer";
import EducationAndExprience from "./Sections/Edu&Exp";

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
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <EducationAndExprience />
      <Footer></Footer>
    </div>
  )
}

export default App
