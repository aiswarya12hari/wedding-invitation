import { useState } from "react";

import InvitationCover from "../components/InvitationCover/InvitationCover";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import Venue from "../components/Venue/Venue";
import RSVP from "../components/RSVP/RSVP";
import Petals from "../components/Petals/Petals";
// import ConfettiBurst from "../components/ConfettiBurst/ConfettiBurst"; 

function Home() {
  const [isOpened, setIsOpened] = useState(false);

  // If the envelope is closed, show it. It REQUIRES a click to open.
  if (!isOpened) {
    return (
      <InvitationCover 
        onOpen={() => setIsOpened(true)} 
      />
    );
  }

  // Once opened, show the main site, petals, and confetti
  return (
    <>
      {/* <ConfettiBurst /> */}
      <Petals />
      <Navbar />
      <Hero />
      <Countdown />
      <Venue />
      <RSVP />
    </>
  );
}

export default Home;