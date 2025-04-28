const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">UbakaHub</div>
      <ul className="nav-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#" className="early-access">Early access</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
