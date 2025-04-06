'use client';
import { useState } from 'react';
import AccessingStuff from './accessing_stuff';
import Link from 'next/link';

export default function SortingComponent({ url = '/api/data/surging_sparks' }) {
  const [sortBy, setSortBy] = useState('name');
  const [priceSuboption, setPricesuboption] = useState('normal')
  const [primarySort, setPrimarySort] = useState('name')
  const handleSortChange = (e) => {
    
      setPrimarySort(e.target.value);

      if(e.target.value === 'price'){
        setSortBy(`price-${priceSuboption}`)
      }
      else{
        setSortBy(e.target.value);

      }


  };

  const handleSuboptionChange = (e) => {

    setPricesuboption(e.target.value);
    setSortBy(`price-${e.target.value}`)

  }

  return (
    <div className="grid justify-items-center">
      <div className="grid grid-cols-11 justify-items-end grid-flow-col">
        <div className="col-span-1 col-start-11">
          <Link href="/">
            <button className="w-2/3 h-1/2 my-4 mx-8 border border-white bg-[#070826] hover:bg-blue-700 text-white font-bold rounded-lg">
              Home
            </button>
          </Link>
        </div>
        <div className="col-span-2 col-start-9">
          <select
            value={primarySort}
            onChange={handleSortChange}
            className="my-4 h-1/2 py-2 rounded-lg border border-gray-300 bg-[#070826]"
          >
            <option value="name">Name (A–Z)</option>
            <option value="rarity">Rarity</option>
            <option value="price">Price (Low–High)</option>
          </select>
        </div>
        {primarySort === 'price' && (
        <div>
          <select
            value={priceSuboption}
            onChange={handleSuboptionChange}
            className="my-4 h-1/2 py-2 rounded-lg border border-gray-300 bg-[#070826]"
          >
            <option value="normal">Normal</option>
            <option value="holofoil">Holofoil</option>
            <option value="reverse-holofoil">Reverse Holofoil</option>
          </select>
        </div>
      )}
      </div>

      {/* 👇 Pass sortBy AND the received url to AccessingStuff */}
      <AccessingStuff url={url} sortBy={sortBy} />
    </div>
  );
}
