//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Value from './components/Value';
import CarouselSlide from './components/CarouselSlide';

function App() {
  return (
    <>
      <Navbar />
      <Carousel>
        <CarouselSlide image="/bg.jpg" description="THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY" />
        <CarouselSlide image="/about-bg.jpg" description="WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM" />
      </Carousel>
      <Value />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
