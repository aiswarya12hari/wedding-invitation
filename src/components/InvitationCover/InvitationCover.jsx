import React from "react";
import "./InvitationCover.css";

import envelopeImg from "../../assets/images/envelope.png";
import handClick from "../../assets/images/hand_click.png";

const InvitationCover = ({ onOpen }) => {
  return (
    <div className="invitation-cover-wrapper">
      {/* Envelope */}
      <img
        src={envelopeImg}
        alt="Wedding Invitation Envelope"
        className="envelope-image"
      />

      {/* Invisible click area */}
      <button
        className="open-envelope-button"
        onClick={onOpen}
        aria-label="Tap to open invitation"
      />

      {/* Animated Hand */}
      <img
        src={handClick}
        alt="Tap to Open"
        className="hand-click"
        onClick={onOpen}
      />

      {/* Optional Text */}
      <div className="tap-text">
        TAP TO OPEN
      </div>
    </div>
  );
};

export default InvitationCover;