import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State to store the list of plants
  const [plants, setPlants] = useState([]);
  
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetches plants data from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Adds a new plant to the list
  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Updates the price of a specific plant
  const updatePlantPrice = (id, newPrice) => {
    fetch(`http://localhost:3000/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        // Update the price of the plant in the local state
        setPlants((prevPlants) =>
          prevPlants.map((plant) =>
            plant.id === id ? { ...plant, price: updatedPlant.price } : plant
          )
        );
      })
      .catch((error) => console.error("Error updating plant:", error));
  };

  // Deletes a plant from the list and removes it from the server
  const deletePlant = (id) => {
    fetch(`http://localhost:3000/plants/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          // Remove the plant from local state if deletion is successful
          setPlants(prevPlants => prevPlants.filter(plant => plant.id !== id));
        }
      })
      .catch(error => console.error("Error deleting plant:", error));
  };

  // Filters plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      {/* Form to add a new plant */}
      <NewPlantForm addPlant={addPlant} />
      
      {/* Search component to filter plants */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* List of plants, filtered by search term, with edit and delete options */}
      <PlantList plants={filteredPlants} onPriceUpdate={updatePlantPrice} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
