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
    let allRarities = [];

    const rarities = ["Hyper Rare", "ACE SPEC Rare", "Double Rare", "Special Illustration Rare", "Ultra Rare" ,"Illustration Rare","Rare"];
    const cheapRarities = ["Common", "Uncommon"];
    await getValues(rarities, allRarities);
    await getOtherRarities(cheapRarities, allRarities)
    await finalCalc(allRarities);
  } finally {
    await client.close();
  }
}

async function getValues(rarities, allRarities) {
  try {
    const database = client.db("test_database");
    const collection = database.collection("surging_sparks");

    for (const rarity of rarities) {

      const query = { rarity: rarity };
      const values = await collection.find(query).toArray();

      if (values.length > 0) {
        const totalHolofoil = values.reduce((sum, item) => sum + item.holofoil, 0);
        const averageHolofoil = (totalHolofoil / values.length).toFixed(2);
        allRarities.push(averageHolofoil);

        console.log(`Average Holofoil Value for ${rarity}:`, averageHolofoil);
      } else {
        console.log(`No documents found for rarity: ${rarity}`);
      }

    }
  } catch (err) {
    console.error(err);
  }
}

async function getOtherRarities(db, ar) {
    try {
      const database = client.db("test_database");
      const collection = database.collection("surging_sparks");
  
      for (const rarity of db) {
        const query = { rarity: rarity };
        const values = await collection.find(query).toArray();
  
        if (values.length > 0) {
          const totalReverseHolofoil = values.reduce((sum, item) => sum + item.reverse_holofoil, 0);
          const averageReverseHolofoil = (totalReverseHolofoil / values.length).toFixed(2);
          ar.push(averageReverseHolofoil);
  
          const totalNormal = values.reduce((sum, item) => sum + item.normal, 0);
          const averageNormal = (totalNormal / values.length).toFixed(2);
          ar.push(averageNormal);
  
          console.log(`Average Holofoil Value for ${rarity}:`, averageReverseHolofoil);
          console.log(`Average Normal Value for ${rarity}:`, averageNormal);
        } else {
          console.log(`No documents found for rarity: ${rarity}`);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
  
async function finalCalc(array) {
    console.log("test");
    total = 0;
    const odds = [0.0053, 0.0503, 0.1694, 0.0115, 0.0674, 0.0767, 1.0913, 0.90204, 4, 0.6256, 3]
    for(let a = 0; a < array.length; a++) {
        total += array[a] * odds[a]
    }
    console.log(total)
}

run().catch(console.dir);   

