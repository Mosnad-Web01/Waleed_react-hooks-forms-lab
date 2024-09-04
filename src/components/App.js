import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (searchText) => {
    setSearchTerm(searchText);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Filter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={setItems} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;
