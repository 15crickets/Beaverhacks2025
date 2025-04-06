'use client';

import { useState, useEffect } from 'react';

export default function AccessingStuff({ url = '/api/surging_sparks', sortBy = 'name' }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fullUrl = `${url}?sortBy=${sortBy}`;
      const res = await fetch(fullUrl);
      const data = await res.json();
      console.log('Fetched data:', data);
      setResults(data);
    };

    fetchData();
  }, [url, sortBy]); // Re-run effect if URL or sort order changes

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
