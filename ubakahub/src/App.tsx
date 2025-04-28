import 'boxicons/css/boxicons.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="landing-container">
      <Navbar />
      <Hero />
      
    </div>
    <section className="project-container">
      {/* something will go here at some point */}
    </section>
    <section className="product-container">
    <ProductPage />
    </section>
    <section className="footer-container">
    <Footer />
    </section>
    </>
  );
}

export default App;
