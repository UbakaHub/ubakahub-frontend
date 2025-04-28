import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="landing-container">
      <Navbar />
      <Hero />
      <hr style={{ margin: "30px 0", border: "1px solid #ccc" }} />
      <Footer />
    </div>
  );
}

export default App;
