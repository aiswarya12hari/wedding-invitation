import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        A <span>&</span> R
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#countdown">Countdown</a></li>
        <li><a href="#venue">Venue</a></li>
        <li><a href="#rsvp">RSVP</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;