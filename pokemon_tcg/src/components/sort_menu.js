import { useState, useEffect } from "react";

export default function SortComponent() {
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`/api/items?field=${sortField}&order=${sortOrder}`);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [sortField, sortOrder]);

  return (
    <div>
      <label>Sort by:</label>
      <select onChange={(e) => setSortField(e.target.value)} value={sortField}>
        <option value="name">Name</option>
        <option value="rarity">Rarity</option>
        <option value="price">Price</option>
      </select>

      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
      </button>

      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.name} - Rarity: {item.rarity} - Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
