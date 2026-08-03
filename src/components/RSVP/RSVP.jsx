import "./RSVP.css";
import { useState } from "react";

function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: 1,
    attendance: "Accept",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for your RSVP! ❤️");

    console.log(formData);
  };

  return (
    <section id="rsvp">
      <div className="rsvp-container">

        <h2>RSVP</h2>

        <p>
          We would be delighted to celebrate our special day with you.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            onChange={handleChange}
          />

          <input
            type="number"
            name="guests"
            min="1"
            placeholder="Number of Guests"
            onChange={handleChange}
          />

          <select
            name="attendance"
            onChange={handleChange}
          >
            <option>Accept</option>
            <option>Decline</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Wedding Wishes..."
            onChange={handleChange}
          />

          <button type="submit">
            Submit RSVP
          </button>

        </form>

      </div>
    </section>
  );
}

export default RSVP;