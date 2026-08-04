import "./Venue.css";

function Venue() {
  return (
    <section id="venue">
      <div className="venue-card">

        <p className="venue-title">
          WEDDING VENUE
        </p>

        <h2>
          Anugraha Kalyanamandapam
        </h2>

        <p className="venue-description">
          With immense joy, we invite you and your family to be a part of our
          wedding celebration at <strong>Anugraha Kalyanamandapam</strong>,
          Kodunthirapully, Pirayiri, Palakkad, Kerala. Your presence and blessings
          would mean the world to us.
        </p>

        <div className="venue-info">
          <p>📅 <strong>Date:</strong> 23 August 2026</p>
          <p>🕘 <strong>Time:</strong> 10:30 AM</p>
          <p>📍 <strong>Location:</strong> Kodunthirapully, Pirayiri</p>
        </div>

        <a
          href="https://maps.google.com/?q=Anugraha+Kalyanamandapam+Kodunthirapully+Palakkad"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn"
        >
          Get Directions
        </a>

      </div>
    </section>
  );
}

export default Venue;