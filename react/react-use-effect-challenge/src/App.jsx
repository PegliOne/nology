import { useState } from "react";
import "./App.css";

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pickedNum = e.target.elements.pickedNum.value;
    fetchData(pickedNum);
  };

  const fetchData = (pickedNum) => {
    fetch(`https://swapi.dev/api/people/${pickedNum}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(`Error: Character with id ${pickedNum} not found`);
        }
        return response.json();
      })
      .then((data) => setCharacterData(data))
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="pickedNumInput">Pick a number: </label>
        <input id="pickedNumInput" type="number" name="pickedNum"></input>
        <button type="submit">Send</button>
      </form>
      {error && <p>{error}</p>}
      {characterData && (
        <section>
          <p>
            <strong>Name: </strong>
            {characterData.name}
          </p>
          <p>
            <strong>Height: </strong>
            {characterData.height}cm
          </p>
          <p>
            <strong>Birth Year: </strong>
            {characterData.birth_year}
          </p>
          <p>
            <strong>Eye Colour: </strong>
            {characterData.eye_color.charAt(0).toUpperCase() +
              characterData.eye_color.slice(1)}
          </p>
        </section>
      )}
    </>
  );
}

export default App;
