import React, { useState } from "react";

function PlantCard({ plant, onPriceUpdate, deletePlant }) {
  // Destructuring plant properties
  const { id, name, image, price } = plant;

  // States for in-stock status, editing, price, loading, success, and error feedback
  const [inStock, setInStock] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(price);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Toggle in-stock status
  function handleStockToggle() {
    setInStock(!inStock);
  }

  // Enter editing mode for price
  const handleEditClick = () => {
    setIsEditing(true);
    setSuccess(false); // Reset success message when editing
  };

  // Save new price, show loading and success/error feedback
  const handleSaveClick = async () => {
    setLoading(true);
    setError("");
    try {
      await onPriceUpdate(id, newPrice);
      setSuccess(true);
    } catch (err) {
      setError("Failed to update price");
    } finally {
      setLoading(false);
      setIsEditing(false);
    }
  };

  // Delete plant with confirmation
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this plant?")) {
      deletePlant(id);
    }
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>
        Price: $
        {isEditing ? (
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)} 
          />
        ) : (
          price
        )}
      </p>

      <button className={`stock-toggle ${inStock ? "primary" : ""}`} onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>

      {isEditing ? (
        <button onClick={handleSaveClick} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      ) : (
        <button onClick={handleEditClick}>Edit Price</button>
      )}

      <button className="delete" onClick={handleDeleteClick}>Delete Plant</button>

      {success && <p className="success">Price updated successfully!</p>}
      {error && <p className="error">{error}</p>}
    </li>
  );
}

export default PlantCard;
