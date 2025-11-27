import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contact } from './Pages/Contact/Contact';
import { Home } from './Pages/Home/Home';
import { Link } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Details } from './Pages/Details/Details';
import { VideoSection } from './Pages/VideoSection/VideoSection';
import { Gallery } from './Pages/Gallery/Gallery';
import { Whatsapp } from './Components/Whatsapp/Whatsapp';
import { Footer } from './Components/Footer/Footer';
import { Logo } from './Components/Logo/Logo';
import { useRef } from 'react';

function App() {

  const contactRef = useRef(null)
  const galleryRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">

      <NavBar scrollToContact={scrollToContact} scrollToGallery={scrollToGallery}></NavBar>
      <Logo></Logo>
      <Home></Home>
      <Details></Details>

      <VideoSection></VideoSection>

      <div ref={galleryRef}>
        <Gallery></Gallery>
      </div>

      <div ref={contactRef}>
        <Contact></Contact>
      </div>
      <Whatsapp></Whatsapp>
      <Footer></Footer>
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Contact />} />
           <Route path="/skills" element={<Skills />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/proyects/:id" element={<ModalContent />} />
        </Routes> */}
    </div >
  );
}

export default App;

