import styles from "./PlanetCard.module.scss";

const PlanetCard = ({
  name,
  imageUrl,
  distanceFromSun,
  diameterInKm,
  numberOfMoons,
  lengthOfYear,
}) => {
  let planetClasses = styles.planet;

  if (numberOfMoons === 0) {
    planetClasses += ` ${styles.planet_no_moons}`;
  }

  return (
    <section className={planetClasses}>
      <img className={styles.planet__image} src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>
        <strong>Diameter: </strong>
        {diameterInKm}
      </p>
      <p>
        <strong>Distance From Sun: </strong>
        {distanceFromSun}
      </p>
      <p>
        <strong>Numbers of Moons: </strong>
        {numberOfMoons}
      </p>
      <p>
        <strong>Length of Year: </strong>
        {lengthOfYear}
      </p>
    </section>
  );
};

export default PlanetCard;
