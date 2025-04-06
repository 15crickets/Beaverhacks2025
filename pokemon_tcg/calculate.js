const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://laol2006:drinkM0reWater%25@surgingsparks.cqtwveb.mongodb.net/?retryWrites=true&w=majority&appName=SurgingSparks";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function calculatePackValue(dbName, collectionName) {
  try {
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Special Odds for the Different Rarities
    const premiumRarities = {
      "ACE SPEC Rare": 0.0503,
      "Illustration Rare": 0.0767,
      "Special Illustration Rare": 0.0115,
      "Hyper Rare": 0.0053,
      "Ultra Rare": 0.0674,
      "Double Rare": 0.1694
    };

    // Base rarities that scale with the amount of each within a set
    const baseRarities = ["Common", "Uncommon", "Rare"];

    // Get counts for each of the rarities
    const rarityCounts = {};
    const averageValues = {};

    // base rarity calculations
    for (const rarity of baseRarities) {
      const cards = await collection.find({ rarity }).toArray();
      if (cards.length > 0) {
        rarityCounts[rarity] = cards.length;

        const totalNormal = cards.reduce((sum, card) => sum + (card.normal || 0), 0);
        const avgNormal = totalNormal / cards.length;

        const totalReverse = cards.reduce((sum, card) => sum + (card.reverse_holofoil || 0), 0);
        const avgReverse = totalReverse / cards.length;

        averageValues[`${rarity}_normal`] = avgNormal;
        averageValues[`${rarity}_reverse`] = avgReverse;
      }
    }

    // premium rarities
    for (const rarity in premiumRarities) {
      const cards = await collection.find({ rarity }).toArray();
      if (cards.length > 0) {
        rarityCounts[rarity] = cards.length;
        const total = cards.reduce((sum, card) => sum + (card.holofoil || 0), 0);
        averageValues[rarity] = total / cards.length;
      } else {
        rarityCounts[rarity] = 0;
        averageValues[rarity] = 0;
      }
    }

    // Tally up base rarities for holo scaling
    const totalBase = baseRarities.reduce((sum, rarity) => sum + (rarityCounts[rarity] || 0), 0);

    // Slot 1-4: Common (normal)
    let expectedValue = 4 * (averageValues["Common_normal"] || 0);

    // Slot 5-7: Uncommon (normal)
    expectedValue += 3 * (averageValues["Uncommon_normal"] || 0);

    // Slot 8: (ACE SPEC odds if they are within set or scaled base rarities)
    if (rarityCounts["ACE SPEC Rare"] > 0) {
      expectedValue += 0.0503 * (averageValues["ACE SPEC Rare"] || 0);
    } else {
      for (const rarity of baseRarities) {
        const proportion = (rarityCounts[rarity] || 0) / totalBase;
        expectedValue += 1 * proportion * (averageValues[`${rarity}_reverse`] || 0);
      }
    }

    // Slot 9: Premium slot or scaled base rarities
    const slot9RarityChances = {
      "Illustration Rare": 0.0767,
      "Special Illustration Rare": 0.0115,
      "Hyper Rare": 0.0053
    };
    const totalPremium9 = Object.values(slot9RarityChances).reduce((a, b) => a + b, 0);

    for (const [rarity, chance] of Object.entries(slot9RarityChances)) {
      expectedValue += chance * (averageValues[rarity] || 0);
    }

    const remainingChance9 = 1 - totalPremium9;
    for (const rarity of baseRarities) {
      const proportion = (rarityCounts[rarity] || 0) / totalBase;
      expectedValue += remainingChance9 * proportion * (averageValues[`${rarity}_reverse`] || 0);
    }

    // Slot 10: Premium slot or Holo Rare
    expectedValue += 0.0674 * (averageValues["Ultra Rare"] || 0);
    expectedValue += 0.1694 * (averageValues["Double Rare"] || 0);

    const remainingChance10 = 1 - 0.0674 - 0.1694;
    expectedValue += remainingChance10 * (averageValues["Rare_reverse"] || 0);

    console.log(`Estimated average pack value for ${collectionName}: $${expectedValue.toFixed(2)}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Main runner
async function run() {
  try {
    await client.connect();
    console.log("Mongo Connected");

    // Call as many times as needed
    await calculatePackValue("test_database", "151");
    await calculatePackValue("test_database", "journey_together");
    await calculatePackValue("test_database", "paldean_fates");
    await calculatePackValue("test_database", "paradox_rift");
    await calculatePackValue("test_database", "prismatic_evolutions");
    await calculatePackValue("test_database", "shrouded_fable");
    await calculatePackValue("test_database", "stellar_crown");
    await calculatePackValue("test_database", "surging_sparks");
    await calculatePackValue("test_database", "temporal_forces");
    await calculatePackValue("test_database", "twilight_masquerade");

  } catch (err) {
    console.error("Mongo connection error:", err);
  } finally {
    await client.close();
    console.log("Mongo Disconnected");
  }
}

run();
