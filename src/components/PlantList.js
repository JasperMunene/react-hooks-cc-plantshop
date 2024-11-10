import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onPriceUpdate, deletePlant }) {
  return (
    <ul className="cards">
      {/* Iterates over the plants array and renders a PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onPriceUpdate={onPriceUpdate}
          deletePlant={deletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
