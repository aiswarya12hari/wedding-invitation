import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        A <span>&</span> R
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#countdown" onClick={closeMenu}>Countdown</a></li>
        <li><a href="#venue" onClick={closeMenu}>Venue</a></li>
        <li><a href="#rsvp" onClick={closeMenu}>RSVP</a></li>
      </ul>

      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;