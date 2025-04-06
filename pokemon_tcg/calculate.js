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
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Rarities grouped by types
    const premiumRarities = {
      "ACE SPEC Rare": 0.0503,
      "Illustration Rare": 0.0767,
      "Special Illustration Rare": 0.0115,
      "Hyper Rare": 0.0053,
      "Ultra Rare": 0.0674,
      "Double Rare": 0.1694
    };

    const baseRarities = ["Common", "Uncommon", "Rare"];

    // Count how many cards of each rarity are in the set
    const rarityCounts = {};
    const averageValues = {};

    // First get base rarities
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

    // Then get premium rarities
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

    // Total for base rarity scaling
    const totalBase = baseRarities.reduce((sum, rarity) => sum + (rarityCounts[rarity] || 0), 0);

    // Slot 1-4: Common (normal)
    let expectedValue = 4 * (averageValues["Common_normal"] || 0);

    // Slot 5-7: Uncommon (normal)
    expectedValue += 3 * (averageValues["Uncommon_normal"] || 0);

    // Slot 8 logic (ACE SPEC chance or scaled base rarities)
    if (rarityCounts["ACE SPEC Rare"] > 0) {
      expectedValue += 0.0503 * (averageValues["ACE SPEC Rare"] || 0);
    } else {
      for (const rarity of baseRarities) {
        const proportion = (rarityCounts[rarity] || 0) / totalBase;
        expectedValue += 1 * proportion * (averageValues[`${rarity}_reverse`] || 0);
      }
    }

    // Slot 9 logic (premium or base rarity scaled)
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

    // Slot 10 logic
    expectedValue += 0.0674 * (averageValues["Ultra Rare"] || 0);
    expectedValue += 0.1694 * (averageValues["Double Rare"] || 0);

    const remainingChance10 = 1 - 0.0674 - 0.1694;
    expectedValue += remainingChance10 * (averageValues["Rare_reverse"] || 0);

    console.log(`Estimated average pack value for ${collectionName}: $${expectedValue.toFixed(2)}`);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

calculatePackValue("test_database", "surging_sparks");
