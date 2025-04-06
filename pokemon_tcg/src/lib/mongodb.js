import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://leed22:beaverhacks@surgingsparks.cqtwveb.mongodb.net/?retryWrites=true&w=majority&appName=SurgingSparks";

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

// Only initialize the MongoClient once
if (process.env.NODE_ENV === 'development') {
  // In development mode, use global to ensure the MongoClient is reused across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it’s safe to create a new MongoClient instance each time
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
