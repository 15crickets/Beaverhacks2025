const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://laol2006:drinkM0reWater%25@surgingsparks.cqtwveb.mongodb.net/test_database?retryWrites=true&w=majority&appName=SurgingSparks";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

async function getValues() {
  try {
    const database = client.db("test_database");
    const collection = database.collection("surging_sparks");
    console.log("Testing");

    const query = { name: "Exeggcute" };
    const values = await collection.find(query).toArray();
    console.log("Testing2")

    console.log(values);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

getValues();
