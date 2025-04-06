import { MongoClient } from "mongodb";

const uri = "mongodb+srv://laol2006:drinkM0reWater%25@surgingsparks.cqtwveb.mongodb.net/test_database?retryWrites=true&w=majority&appName=SurgingSparks";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("test_database");
    const collection = db.collection("surging_sparks");

    const { sortBy, order } = req.query; // Get sorting preferences from the request

    const sortOptions = {};
    sortOptions[sortBy] = order === "desc" ? -1 : 1; // Set ascending or descending order

    const results = await collection.find().sort(sortOptions).toArray();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  } finally {
    await client.close();
  }
}
