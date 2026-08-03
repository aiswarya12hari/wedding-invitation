import React from 'react';
import './InvitationCover.css';
import envelopeImg from '../../assets/images/envelope.png'; 

const InvitationCover = ({ onOpen }) => {
  return (
    <div className="invitation-cover-wrapper">
      <img 
        src={envelopeImg} 
        alt="Wedding Invitation Envelope" 
        className="envelope-image" 
      />
      <button 
        className="open-envelope-button" 
        onClick={onOpen}
        aria-label="Tap to open invitation"
      >
        <span className="button-text">TAP TO OPEN</span>
      </button>
    </div>
  );
};

export default InvitationCover;