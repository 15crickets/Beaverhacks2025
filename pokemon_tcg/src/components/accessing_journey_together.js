const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://laol2006:drinkM0reWater%25@surgingsparks.cqtwveb.mongodb.net/test_database?retryWrites=true&w=majority&appName=SurgingSparks";




const client = new MongoClient(uri, {
 serverApi: {
   version: ServerApiVersion.v1,
   strict: true,
   deprecationErrors: true,
 }
});




export async function runCode() {
 let newVar;
 try {
   await client.connect();
   await client.db("admin").command({ ping: 1 });
   console.log("Pinged your deployment. You successfully connected to MongoDB!");




   newVar = await getValues("image");
 } finally {
   await client.close();
 }
 return newVar;
}




async function getValues(fieldName) {
 try {
   const database = client.db("test_database");
   const collection = database.collection("journey_together");




   const projection = { [fieldName]: 1, _id: 0 }; // Include the specific field and exclude the _id field
   const results = await collection.find({}, { projection }).toArray();


   return results.map((doc) => doc[fieldName]);


 } catch (err) {
   console.error(err);
  
 }
  
  
 
}


runCode().catch(console.dir);