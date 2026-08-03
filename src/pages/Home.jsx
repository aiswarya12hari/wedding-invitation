import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import Venue from "../components/Venue/Venue";
import RSVP from "../components/RSVP/RSVP";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <Venue />
      <RSVP />
    </>
  );
}

export default Home;