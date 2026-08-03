import "./InvitationCover.css";
import coverImage from "../../assets/images/envelope.png";

function InvitationCover({ onOpen }) {
  return (
    <div className="cover">
      <img
        src={coverImage}
        alt="Wedding Invitation"
        className="cover-image"
      />

      <button
        className="open-btn"
        onClick={onOpen}
      >
        TAP TO OPEN
      </button>
    </div>
  );
}

export default InvitationCover;