import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Features from './Components/Features.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Gallery from './Components/Gallery.jsx';
import FAQ from './Components/FAQ.jsx';
import Pricing from './Components/Pricing.jsx';
import ContactComponent from './Components/Contact.jsx';
import Opinions from './Components/Opinions.jsx';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className='App'>
        <Routes>
          {/* Página principal con todas las secciones */}
          <Route
            path='/'
            element={
              <>
                <Features />
                <Gallery />
                <Pricing />
                <Opinions />
                <Testimonials />
                <FAQ />
                <ContactComponent />
              </>
            }
          />
          {/* Otras páginas individuales si lo deseas */}
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<ContactComponent />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
