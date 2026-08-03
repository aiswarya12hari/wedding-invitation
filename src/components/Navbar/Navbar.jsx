import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Change this to your actual names or initials. Adding an & and dot makes it elegant */}
      <div className="nav-logo">S <span className="ampersand">&amp;</span> K</div>
      <div className="nav-links">
        <a href="#countdown">When</a>
        <a href="#venue">Where</a>
        <a href="#rsvp">RSVP</a>
      </div>
    </nav>
  );
}

export default Navbar;