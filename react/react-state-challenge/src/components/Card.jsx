import { useState } from "react";

const Card = () => {
  const [time, setTime] = useState(0);

  const generateRandomTime = () => {
    const hours = 3;
    const randomTime = hours + ":00";
    setTime(randomTime);
  };

  return (
    <section>
      <button onClick={generateRandomTime}>Click for Random Time</button>
      <p>Time: {time}</p>
    </section>
  );
};

export default Card;
