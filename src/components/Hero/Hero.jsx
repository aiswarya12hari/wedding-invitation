import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">

      <img
        src={heroImage}
        alt="Kripa and Sudhesh"
        className="hero-image"
      />

      <div className="overlay"></div>

      <div className="hero-content">

        <p className="save-date">
          SAVE THE DATE
        </p>

        <h2>Sudhesh</h2>

        <span className="ampersand">&</span>

        <h2>Kripa</h2>

        <h1>Forever Begins</h1>

        <p className="date">
          23 August 2026
        </p>

        <button>
          Open Invitation
        </button>

      </div>

    </section>
  );
}

export default Hero;