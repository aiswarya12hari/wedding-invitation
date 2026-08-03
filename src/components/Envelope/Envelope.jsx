import "./Envelope.css";
import envelopeImg from "../../assets/images/envelope.png";

function Envelope({ onOpen }) {
  return (
    <div className="envelope-screen">

      <img
        src={envelopeImg}
        alt="Wedding Invitation"
        className="envelope-image"
        onClick={onOpen}
      />

      <p className="tap-text">
        TAP TO OPEN
      </p>

    </div>
  );
}

export default Envelope;