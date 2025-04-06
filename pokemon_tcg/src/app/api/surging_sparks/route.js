// pages/api/surging_sparks.js

import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const { sortBy = 'name' } = req.query; // Default to 'name' if no sortBy is provided
    const client = await clientPromise;
    const db = client.db("test_database");
    const collection = db.collection("surging_sparks");

    const projection = {
      name: 1,
      normal: 1,
      rarity: 1,
      _id: 0,
    };

    // Fetch all documents from MongoDB
    const results = await collection.find({}, { projection }).toArray();

    if (!results) {
      throw new Error('No results found');
    }

    // Sorting logic based on `sortBy`
    if (sortBy === 'price') {
      results.sort((a, b) => parseFloat(a.normal) - parseFloat(b.normal)); // Sort by price
    } else {
      results.sort((a, b) => a[sortBy].localeCompare(b[sortBy])); // Sort by name or rarity
    }

    res.status(200).json(results); // Return sorted data
  } catch (error) {
    console.error('Error fetching and sorting data:', error); // Log the error to the server console
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
