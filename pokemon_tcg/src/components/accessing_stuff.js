'use client';

import { useState, useEffect } from 'react';

export default function AccessingStuff({ sortBy = 'name' }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`/api/surging_sparks?sortBy=${sortBy}`);

        const data = await res.json();
        setResults(data);
    };
    fetchData();
  }, [sortBy]);


  return (
    <div className="grid grid-cols-4 gap-20">
      {results.map((doc, index) => (
        <div key={index} className="flex flex-col w-fit">
          <img src={doc.image} alt={`Image ${index}`} className="mb-2" />
          <div className="bg-[#070826] mt-3 rounded-xl mb-15 w-full">
            <p className="text-center font-bold">{doc.name}</p>
            <p className="text-center font-bold">{doc.rarity}</p>
            <p className="text-center font-bold">${doc.normal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
