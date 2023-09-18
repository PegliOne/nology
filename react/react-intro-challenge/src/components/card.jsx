import MountainImage from "../assets/react-intro-challenge.png";

const Card = () => {
  return (
    <section>
      <img src={MountainImage} alt="Mountains Image" />
      <h2>This is a Title</h2>
      <p>
        <strong>This is a Subtitle</strong>
      </p>
      <p className="short-description">This is a short description</p>
      <button>Click me</button>
    </section>
  );
};

export default Card;
