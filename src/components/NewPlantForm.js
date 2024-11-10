import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  // State to manage form data for the new plant
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  });
  // State for feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handles changes in form inputs and updates the formData state
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handles form submission to add a new plant
  async function handleSubmit(event) {
    event.preventDefault(); // Prevents default form submission behavior
    setLoading(true);       // Sets loading state
    setError(null);         // Resets any previous error
    setSuccess(false);      // Resets success message

    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    };

    try {
      const response = await fetch('http://localhost:3000/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlant) // Converts new plant data to JSON format
      });

      if (!response.ok) throw new Error("Failed to add plant");

      const data = await response.json();
      addPlant(data); // Adds the new plant to the list in the parent component
      setFormData({ name: '', image: '', price: '' }); // Resets form fields after submission
      setSuccess(true); // Sets success feedback
    } catch (error) {
      setError("Error adding plant: " + error.message); // Sets error feedback
    } finally {
      setLoading(false); // Ends loading state
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange} // Updates name in formData
           className=""
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange} // Updates image URL in formData
           className=""
          required
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange} // Updates price in formData
         className=""
          required
        />
        <button type="submit" className="" disabled={loading}>
          {loading ? "Adding..." : "Add Plant"}
        </button>
      </form>
      {/* Success message */}
      {success && <p className="success">Plant added successfully!</p>}
      {/* Error message */}
      {error && <p className="error">{error}</p>}
    </div>
  );
}



export default NewPlantForm;
