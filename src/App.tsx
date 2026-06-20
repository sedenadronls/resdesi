import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import SignatureDishes from "./components/SignatureDishes";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import ReserveOrder from "./components/ReserveOrder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollSpine from "./components/ScrollSpine";
import EmberField from "./three/EmberField";

function App() {
  return (
    <>
      <div className="grain-overlay" />
      <div className="vignette-overlay" />
      <EmberField />
      <ScrollSpine />

      <Nav />
      <Hero />
      <About />
      <SignatureDishes />
      <MenuSection />
      <Gallery />
      <Reviews />
      <ReserveOrder />
      <Contact />
      <Footer />

      <WhatsAppFloat />
    </>
  );
}

export default App;
