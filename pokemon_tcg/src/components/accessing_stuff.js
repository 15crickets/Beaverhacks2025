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

   newVar = await getValues("image", "name", "normal", "rarity");
 } finally {
   await client.close();
 }
 return newVar;
}




async function getValues(image, name, price, rarity) {
 try {
   const database = client.db("test_database");
   const collection = database.collection("surging_sparks");




   const projection = { [image]: 1, [name]: 1, [price]: 1, [rarity]: 1, _id: 0 }; // Include the specific field and exclude the _id field
   const results = await collection.find({}, { projection }).toArray();


   const imageList = results.map((doc) => doc[image]);
   const nameList = results.map((doc) => doc[name]);
   const priceList = results.map((doc) => doc[price]);
   const rarityList = results.map((doc) => doc[rarity]);


   return [imageList, nameList, priceList, rarityList];


 } catch (err) {
   console.error(err);
  
 }
  
  
 
}


runCode().catch(console.dir);