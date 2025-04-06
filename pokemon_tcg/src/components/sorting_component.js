'use client';

import { useState } from 'react';
import AccessingStuff from '../app/surging_sparks/accessing_stuff';

export default function SortingComponent() {
  const [sortBy, setSortBy] = useState('name');

  return (
    <div className="flex flex-col w-full items-center">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="mb-4 px-4 py-2 rounded-lg border border-gray-300"
      >
        <option value="name">Name (A–Z)</option>
        <option value="rarity">Rarity</option>
        <option value="price">Price (Low–High)</option>
      </select>

      {/* Re-renders AccessingStuff component when sortBy changes */}
      <AccessingStuff sortBy={sortBy} />
    </div>
  );
}
