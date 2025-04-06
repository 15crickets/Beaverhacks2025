'use server';

import clientPromise from '@/lib/mongodb';

export default async function AccessingStuff() {
  const client = await clientPromise;
  const db = client.db("test_database");
  const collection = db.collection("surging_sparks");

  const projection = {
    image: 1,
    name: 1,
    normal: 1,
    rarity: 1,
    _id: 0,
  };

  const results = await collection.find({}, { projection }).toArray();

  const imageList = results.map((doc) => doc.image);
  const nameList = results.map((doc) => doc.name);
  const priceList = results.map((doc) => doc.normal);
  const rarityList = results.map((doc) => doc.rarity);

  return (
    <div>
      <h2>Surging Sparks Cards</h2>
      {nameList.map((name, i) => (
        <div key={i}>
          <img src={imageList[i]} alt={name} />
          <p>{name} - {priceList[i]} ({rarityList[i]})</p>
        </div>
      ))}
    </div>
  );
}
