// pages/api/surging_sparks.js

import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  const { sortBy } = req.query; // Sorting criteria from the query string
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

  if (sortBy === 'price') {
    results.sort((a, b) => parseFloat(a.normal) - parseFloat(b.normal));
  } else {
    results.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  res.status(200).json(results);
}
