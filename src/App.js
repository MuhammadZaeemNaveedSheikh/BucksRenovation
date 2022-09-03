import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import testImage from "./Images/test.jpg";
import footerLogo from "./Images/logo_custom_gold.png";
import partners from "./Images/partners.png";
import Navbar from './components/Navbar';
import Carosal from './components/Carosal';
import VC from './components/Vc';
import VC2 from './components/Vc2';
import Testimonials from './components/Testimonials'
import Renovation from './components/Renovation';
import Expectation from './components/Expectation';
import VcNodeling from './components/VcModeling';
import Blog from './components/Blog';
import Estimate from './components/Estimate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Credit from './components/Credit';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carosal />
      <VC />
      <VC2 />
      <Testimonials />
      <Renovation />
      <Expectation />
      <VcNodeling />
      <Blog />
      <Estimate />
      <Contact />
      <Footer />
      <Credit />

    </div>
  );
}

export default App;
