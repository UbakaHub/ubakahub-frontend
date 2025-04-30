import 'boxicons/css/boxicons.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPage from './components/ProductPage';
import ComingSoon from './components/ComingSoon';
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
      <div className='container-coming-soon'>
        <ComingSoon />
      </div>
      <Footer />
    </section>
    </>
  );
}

export default App;
