'use client';
import { useState } from 'react';
import AccessingStuff from './accessing_stuff';
import Link from 'next/link';

export default function SortingComponent({ url = '/api/data/surging_sparks' }) {
  const [sortBy, setSortBy] = useState('name');
  const [priceSuboption, setPricesuboption] = useState('normal');
  const [primarySort, setPrimarySort] = useState('name');

  const handleSortChange = (e) => {
    setPrimarySort(e.target.value);

    if (e.target.value === 'price') {
      setSortBy(`price-${priceSuboption}`);
    } else {
      setSortBy(e.target.value);
    }
  };

  const handleSuboptionChange = (e) => {
    setPricesuboption(e.target.value);
    setSortBy(`price-${e.target.value}`);
  };

  return (
    <div className="grid justify-items-center">
      <div className="flex justify-end items-center gap-x-4 w-full px-60">
        {primarySort === 'price' && (
          <div>
            <select
              value={priceSuboption}
              onChange={handleSuboptionChange}
              className="my-4 h-10 py-2 px-2 rounded-lg border border-gray-300 bg-[#070826] text-white"
            >
              <option value="normal">Normal</option>
              <option value="holofoil">Holofoil</option>
              <option value="reverse-holofoil">Reverse Holofoil</option>
            </select>
          </div>
        )}

        <div>
          <select
            value={primarySort}
            onChange={handleSortChange}
            className="my-4 h-10 py-2 px-2 rounded-lg border border-gray-300 bg-[#070826] text-white"
          >
            <option value="name">Name</option>
            <option value="rarity">Rarity</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div>
          <Link href="/">
            <button className="h-10 px-4 my-4 border border-white bg-[#070826] hover:bg-blue-700 text-white font-bold rounded-lg">
              Home
            </button>
          </Link>
        </div>
      </div>

      {/* 👇 Pass sortBy AND the received url to AccessingStuff */}
      <AccessingStuff url={url} sortBy={sortBy} />
    </div>
  );
}