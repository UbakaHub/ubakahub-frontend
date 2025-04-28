const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyrights">&copy; UbakaHub. All rights reserved.</p>
      <div className="footer-related-docs">
      <p>Privacy Policy</p>
      <p>Terms of service</p>
      </div>
      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://in.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
