import "./Envelope.css";
import envelopeImg from "../../assets/images/envelope.png";
import handClick from "../../assets/images/hand_click.png";

function Envelope({ onOpen }) {
  return (
    <div className="envelope-screen">
      {/* Envelope */}
      <img
        src={envelopeImg}
        alt="Wedding Invitation"
        className="envelope-image"
        onClick={onOpen}
      />

      {/* Animated Hand */}
      <div className="tap-indicator">
        <img
          src={handClick}
          alt="Tap to Open"
          className="hand-click"
          onClick={onOpen}
        />
      </div>
    </div>
  );
}

export default Envelope;