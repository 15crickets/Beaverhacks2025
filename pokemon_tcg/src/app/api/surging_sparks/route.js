import clientPromise from '@/lib/mongodb';

export async function GET(req) {
    // Accessing query parameters using nextUrl.searchParams
    const url = req.nextUrl;
    const sortBy = url.searchParams.get('sortBy') || 'name'; // Default to 'name' if no sortBy is provided

    const client = await clientPromise;
    const db = client.db("test_database");
    const collection = db.collection("surging_sparks");

    const projection = {
      image: 1,
      name: 1,
      normal: 1,
      rarity: 1,
      _id: 0,
    };

    // Fetch all documents from MongoDB
    const results = await collection.find({}, { projection }).toArray();

    // Sorting logic based on `sortBy`
    if (sortBy === 'price') {
      results.sort((a, b) => parseFloat(a.normal) - parseFloat(b.normal)); // Sort by price
    } else {
      results.sort((a, b) => a[sortBy]?.localeCompare(b[sortBy])); // Sort by name or rarity
    }

    // Return the response as JSON
    return new Response(JSON.stringify(results));
}
