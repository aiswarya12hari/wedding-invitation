import { useState, useEffect } from "react";

import InvitationCover from "../components/InvitationCover/InvitationCover";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import Venue from "../components/Venue/Venue";
import RSVP from "../components/RSVP/RSVP";
import Petals from "../components/Petals/Petals";
import ConfettiBurst from "../components/ConfettiBurst/ConfettiBurst"; 

function Home() {
  const [isOpened, setIsOpened] = useState(false);

  // Auto-reveal the invitation 1.5 seconds after loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpened(true);
    }, 1800); // 1.8 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isOpened) {
    // Envelope stays fullscreen, but we removed the button logic here
    return <InvitationCover />;
  }

  return (
    <>
      {/* 1. The Instant Gold Burst */}
      <ConfettiBurst />

      {/* 2. Continuous falling petals */}
      <Petals />

      {/* 3. The Main Website */}
      <Navbar />
      <Hero />
      <Countdown />
      <Venue />
      <RSVP />
    </>
  );
}

export default Home;