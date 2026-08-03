import React from 'react';
import './Petals.css';

const Petals = () => {
  // We generate 15 petals with random positions, sizes, and timings
  const petals = Array.from({ length: 15 }).map((_, i) => {
    const randomLeft = Math.floor(Math.random() * 100); // 0% to 100% left position
    const randomDelay = Math.random() * 10; // 0 to 10 second delay
    const randomDuration = 8 + Math.random() * 8; // 8 to 16 second falling time
    const randomSize = 10 + Math.random() * 20; // 10px to 30px size

    return (
      <div
        key={i}
        className="petal"
        style={{
          left: `${randomLeft}%`,
          animationDelay: `${randomDelay}s`,
          animationDuration: `${randomDuration}s`,
          width: `${randomSize}px`,
          height: `${randomSize}px`,
        }}
      />
    );
  });

  return <div className="petals-container">{petals}</div>;
};

export default Petals;