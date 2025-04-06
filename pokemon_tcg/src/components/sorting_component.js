'use client';

import { useState } from 'react';
import AccessingStuff from './accessing_stuff'; // Assuming AccessingStuff is in the same folder

export default function SortingComponent() {
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="mb-4 px-4 py-2 rounded-lg border border-gray-300"
      >
        <option value="name">Name (A–Z)</option>
        <option value="rarity">Rarity</option>
        <option value="price">Price (Low–High)</option>
      </select>

      {/* Pass selected sortBy value to AccessingStuff */}
      <AccessingStuff sortBy={sortBy} />
    </div>
  );
}
