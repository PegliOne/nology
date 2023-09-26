import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [card, setCard] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const cardData = {
      name: data.get("name"),
      email: data.get("email"),
      role: data.get("role"),
      company: data.get("company"),
      image: data.get("image"),
    };
    setCard(cardData);
  };

  return (
    <>
      <h1>Business Card Generator</h1>
      <Form handleFormSubmit={handleFormSubmit} />
      {card && (
        <Card
          name={card.name}
          email={card.email}
          role={card.role}
          company={card.company}
          imageUrl={card.image}
        />
      )}
    </>
  );
}

export default App;
