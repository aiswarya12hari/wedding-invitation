import "./Envelope.css";
import envelopeImg from "../../assets/images/envelope.png";
import { FaChevronDown } from "react-icons/fa";

function Envelope({ onOpen }) {
  return (
    <div className="envelope-screen">

      <img
        src={envelopeImg}
        alt="Wedding Invitation"
        className="envelope-image"
        onClick={onOpen}
      />

      <div className="tap-container">
        <FaChevronDown className="down-arrow" />

        <p className="tap-text">
          TAP TO OPEN
        </p>
      </div>

    </div>
  );
}

export default Envelope;