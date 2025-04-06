import { useState, useEffect } from "react";

export default function SortMenu() {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    async function fetchSortedData() {
      const response = await fetch(`/api/sort?sortBy=${sortBy}&order=${order}`);
      const sortedData = await response.json();
      setData(sortedData);
    }
    fetchSortedData();
  }, [sortBy, order]); // Refetch when sort options change

  return (
    <div>
      <div>
        <label>Sort by: </label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="rarity">Rarity</option>
        </select>

        <label>Order: </label>
        <select onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div>
        {data.map((item, index) => (
          <p key={index}>{item.name} - ${item.price}</p>
        ))}
      </div>
    </div>
  );
}
