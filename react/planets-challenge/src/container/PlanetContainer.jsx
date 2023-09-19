import PlanetCard from "../components/PlanetCard";
import planets from "../data/planets.json";

const PlanetContainer = () => {
  return (
    <main>
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
