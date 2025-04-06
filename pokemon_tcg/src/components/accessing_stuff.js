'use client';

import { useState, useEffect } from 'react';

export default function AccessingStuff({ sortBy = 'name' }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle any potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/surging_sparks?sortBy=${sortBy}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setResults(data);
      } catch (error) {
        setError(error.message); // Set the error message if the request fails
      } finally {
        setLoading(false); // Set loading to false when the data is fetched
      }
    };

    fetchData();
  }, [sortBy]); // Re-fetch data when sortBy changes

  // Loading and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
