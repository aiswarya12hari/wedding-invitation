import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Top Content */}
      <div className="hero-top">
        <p className="hero-eyebrow fade-in-up">
          Save the Date
        </p>

        <p className="hero-greeting fade-in-up">
          We are getting married
        </p>
      </div>

      {/* Bottom Content */}
      <div className="hero-bottom">
        <h1 className="hero-title shimmer-text fade-in-up">
          Kripa &amp; Srudheesh
        </h1>

        <div className="hero-divider fade-in-up"></div>

        <p className="hero-date fade-in-up">
          August 23, 2026
        </p>
      </div>
    </section>
  );
}

export default Hero;