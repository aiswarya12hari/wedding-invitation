import React, { useEffect, useState } from 'react';
import './ConfettiBurst.css';

const ConfettiBurst = () => {
  // State to control unmounting after animation finishes
  const [isVisible, setIsVisible] = useState(true);

  // Auto-unmount after the explosion animation ends (1.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Generate 60 pieces of gold confetti
  const confettiPieces = Array.from({ length: 60 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2; // Random direction
    const distance = 30 + Math.random() * 100; // Random explosion distance (percentage)
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 30; // Slight upward bias
    const size = 5 + Math.random() * 8; // Random size
    const duration = 0.6 + Math.random() * 0.8; // Random speed
    const delay = Math.random() * 0.1; // Slight stagger

    return (
      <div
        key={i}
        className="confetti-piece"
        style={{
          '--x': `${x}vw`,
          '--y': `${y}vh`,
          '--rotate': `${Math.random() * 720}deg`,
          width: `${size}px`,
          height: `${size * 2.5}px`, // Makes them look like elegant ribbons
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  if (!isVisible) return null;

  return (
    <div className="confetti-burst-container">
      {confettiPieces}
    </div>
  );
};

export default ConfettiBurst;