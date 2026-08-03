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
          We warmly invite you to celebrate our special day at
          <strong> Anugraha Kalyanamandapam</strong>,
          Kodunthirapully, Pirayiri, Palakkad, Kerala.
        </p>

        <div className="venue-info">
          <p>📅 <strong>Date:</strong> 23 August 2026</p>
          <p>🕘 <strong>Time:</strong> 10:30 AM</p>
          <p>📍 <strong>Location:</strong> Kodunthirapully, Pirayiri, Palakkad</p>
        </div>

        <a
          href="https://maps.google.com/?q=Anugraha+Kalyanamandapam+Kodunthirapully+Palakkad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="direction-btn">
            Get Directions
          </button>
        </a>

      </div>
    </section>
  );
}

export default Venue;