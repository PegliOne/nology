import { useState } from "react";
import styles from "./Card.module.scss";

const Card = () => {
  const [time, setTime] = useState(6);
  const [isDay, setIsDay] = useState(true);

  const generateRandomTime = () => {
    const time = Math.floor(Math.random() * 24);
    setTime(time);
    const isDay = time >= 6 && time < 18;
    setIsDay(isDay);
  };

  let cardClasses = styles.card;
  let contentClasses = styles.content;

  if (!isDay) {
    cardClasses += ` ${styles.night}`;
    contentClasses += ` ${styles.night}`;
  }

  return (
    <main className={cardClasses}>
      <section className={contentClasses}>
        <h1>Day / Night Mode App</h1>
        {isDay ? (
          <img src="sun.svg" alt="Sun Icon" />
        ) : (
          <img src="moon.svg" alt="Moon Icon" />
        )}
        <button onClick={generateRandomTime}>Click for Random Time</button>
        <p>Time: {time}:00</p>
      </section>
    </main>
  );
};

export default Card;
