import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const weddingDate = new Date("August 23, 2026 09:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor(
        (distance % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown">

      <p className="count-title">
        COUNTING DOWN TO
      </p>

      <h1 className="big-day">
        The Big Day
      </h1>

      <div className="timer-box">

        <div className="time-card">
          <h2 key={timeLeft.days}>{timeLeft.days}</h2>
          <span>DAYS</span>
        </div>

        <div className="time-card">
          <h2 key={timeLeft.hours}>{timeLeft.hours}</h2>
          <span>HOURS</span>
        </div>

        <div className="time-card">
          <h2 key={timeLeft.minutes}>{timeLeft.minutes}</h2>
          <span>MINUTES</span>
        </div>

        <div className="time-card">
          <h2 key={timeLeft.seconds}>{timeLeft.seconds}</h2>
          <span>SECONDS</span>
        </div>

      </div>

      <p className="event-date">
        23 August 2026
      </p>

    </section>
  );
}

export default Countdown;