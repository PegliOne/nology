import PlanetCard from "../components/PlanetCard";
import planets from "../data/planets.json";
import styles from "./PlanetContainer.module.scss";

const PlanetContainer = () => {
  return (
    <main className={styles.planets}>
      {planets.map((planet) => (
        <PlanetCard
          key={planet.planetName}
          name={planet.planetName}
          imageUrl={planet.image}
          distanceFromSun={planet.distanceFromSun}
          diameter={planet.diameterInKm}
          numberOfMoons={planet.numberOfMoons}
          lengthOfYear={planet.lengthOfYear}
        />
      ))}
    </main>
  );
};

export default PlanetContainer;
