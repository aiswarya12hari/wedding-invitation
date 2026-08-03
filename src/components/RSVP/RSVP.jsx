import "./RSVP.css";
import { useState } from "react";

function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "accept", // defaults to 'accept'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAttendanceToggle = (value) => {
    setFormData({
      ...formData,
      attendance: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      // 🔴 STEP 1: Paste your Web3Forms Access Key here (keep the quotes!)
      const accessKey = "bf69fe3a-ec84-499b-9d46-30cbc8e23fe0";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          phone: formData.phone,
          // Web3Forms allows custom text for the attendance:
          attendance: formData.attendance === "accept" ? "Joyfully Accept" : "Regretfully Decline",
        }),
      });

      const data = await response.json();

      // Web3Forms returns a clean JSON response, so we can check if it succeeded!
      if (data.success) {
        setStatusMessage("✅ Thank you! Your RSVP has been sent.");
        setFormData({ name: "", phone: "", attendance: "accept" });
      } else {
        setStatusMessage("❌ Something went wrong. Please check the form and try again.");
      }
    } catch (error) {
      setStatusMessage("❌ Network error. Please check your internet connection.");
      console.error("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp">
      <div className="rsvp-container">
        <h2 className="rsvp-title">RSVP</h2>

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="input-group">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* PHONE */}
          <div className="input-group">
            <label>PHONE</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* ATTENDING TOGGLE */}
          <div className="input-group">
            <label>ATTENDING</label>
            <div className="attending-group">
              <button
                type="button"
                className={`attending-btn ${formData.attendance === "accept" ? "active-accept" : ""}`}
                onClick={() => handleAttendanceToggle("accept")}
              >
                Joyfully Accept
              </button>
              <button
                type="button"
                className={`attending-btn ${formData.attendance === "decline" ? "active-decline" : ""}`}
                onClick={() => handleAttendanceToggle("decline")}
              >
                Regretfully Decline
              </button>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "10px" }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {isSubmitting ? "SENDING..." : "SEND RSVP"}
          </button>
        </form>

        {statusMessage && <p className="status-msg">{statusMessage}</p>}
      </div>
    </section>
  );
}

export default RSVP;