const PlanetCard = ({
  name,
  imageUrl,
  distanceFromSun,
  diameterInKm,
  numberOfMoons,
  lengthOfYear,
}) => {
  return (
    <section>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </section>
  );
};

export default PlanetCard;
