import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow fade-in-up">Save the Date</p>
        <p className="hero-greeting fade-in-up">
          We are getting married
        </p>
        <h1 className="hero-title shimmer-text fade-in-up">
          Kripa &amp; Srudheesh
        </h1>
        <div className="hero-divider fade-in-up" aria-hidden="true"></div>
        <p className="hero-date fade-in-up">August 23, 2026</p>
      </div>
    </section>
  );
}

export default Hero;