import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const url = new URL(req.url);
  const sortBy = url.searchParams.get('sortBy') || 'name';

  // Extract the dynamic part from pathname
  const pathParts = url.pathname.split('/');
  const collectionName = pathParts[pathParts.length - 1]; // e.g. "surging_sparks"

  const client = await clientPromise;
  const db = client.db('test_database');
  const collection = db.collection(collectionName);

  const projection = {
    image: 1,
    name: 1,
    normal: 1,
    holofoil: 1,
    reverse_holofoil: 1,
    first_edition_holofoil: 1,
    first_edition_normal: 1,
    rarity: 1,
    _id: 0,
  };

  const results = await collection.find({}, { projection }).toArray();

  if (sortBy.includes('price')) {
    if (sortBy.includes('reverse-holofoil')) {
      console.log("Sorting by reverse holofoil price in descending order");
      results.sort((a, b) => parseFloat(b.reverse_holofoil) - parseFloat(a.reverse_holofoil)); // Descending sort
    } else if (sortBy.includes('holofoil')) {
      results.sort((a, b) => parseFloat(b.holofoil) - parseFloat(a.holofoil)); // Descending sort
    } else {
      results.sort((a, b) => parseFloat(b.normal) - parseFloat(a.normal)); // Descending sort
    }
  } else {
    results.sort((a, b) => a[sortBy]?.localeCompare(b[sortBy])); // Ascending alphabetical sort
  }

  return new Response(JSON.stringify(results));
}