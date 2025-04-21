import './App.css'

function App() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">UbakaHub</div>
        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="early-access">Early access</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="icons">
          <span>🏙️</span>
          <span>✅</span>
          <span>👥</span>
          <span>📞</span>
        </div>
        <h2>Build. Validate. Connect. Trade.</h2>
        <p>
          Spend your time wisely, even on things that matter, like your home. Secure floorplan approval,
          buy eco-friendly building materials, talk to professionals and build a home
          without stressing too much about it.
        </p>
        <button className="cta-btn">
          Get early access <span className="arrow">➡️</span>
        </button>
      </header>
      
      <hr style={{ margin: "30px 0", border: "1px solid #ccc" }} />


      <footer className="footer">
        <ul className="nav-links">
          <li><a href="#">UbakaHub</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="early-access">Early access</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default App
