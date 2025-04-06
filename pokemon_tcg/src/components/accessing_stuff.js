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
      console.log("CURRENT SORTBY: " + sortBy);
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
            {displayPrices(doc)}
          </div>
        </div>
      ))}
    </div>
  );
}

function displayPrices(doc){
  const returned = [];
  if(doc.normal != 0){
    returned.push(<p className="text-center font-bold">Normal Price: ${doc.normal}</p>);

  }

  if(doc.holofoil != 0){
    returned.push(<p className="text-center font-bold">Holofoil Price: ${doc.holofoil}</p>
    )
  }

  if(doc.reverse_holofoil != 0){
    returned.push(<p className="text-center font-bold">Reverse Holofoil Price: ${doc.reverse_holofoil}</p>
    )
  }


  return(
    <>{returned}</>
  )

}