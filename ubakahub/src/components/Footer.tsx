import './Footer.css';
// import UbakaLogo from '../assets/ubakahub-logo.svg'; // adjust the path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* <img src={UbakaLogo} alt="UbakaHub Logo" className="footer-logo" /> */}
        <p className="copyrights">&copy; UbakaHub. All rights reserved.</p>
      </div>

      <div className="footer-right">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="footer-related-docs">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
