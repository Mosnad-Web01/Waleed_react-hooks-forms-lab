import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // Ensure uuid is installed

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit((prevItems) => [...prevItems, newItem]);

    // Resetting the form fields
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item name"
        required
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
