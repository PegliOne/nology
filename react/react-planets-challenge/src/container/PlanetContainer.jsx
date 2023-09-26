import _ from "underscore";
import PlanetCard from "../components/PlanetCard";
import planets from "../data/planets.json";
import styles from "./PlanetContainer.module.scss";

const PlanetContainer = () => {
  const planetsBySize = _.sortBy(planets, "diameterInKm");

  return (
    <main className={styles.planets}>
      {planetsBySize.map((planet) => (
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
