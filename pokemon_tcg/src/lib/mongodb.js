import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://laol2006:drinkM0reWater%25@surgingsparks.cqtwveb.mongodb.net/test_database?retryWrites=true&w=majority&appName=SurgingSparks";

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
