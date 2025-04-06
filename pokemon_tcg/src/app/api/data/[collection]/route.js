import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const url = new URL(req.url);
  const sortBy = url.searchParams.get('sortBy') || 'name';

  // Extract the dynamic part from pathname
  const pathParts = url.pathname.split('/');
  const collectionName = pathParts[pathParts.length - 1]; // e.g. "surging_sparks"

  const client = await clientPromise;
  const db = client.db('SurgingSparks');
  const collection = db.collection(collectionName);

  const projection = {
    image: 1,
    name: 1,
    normal: 1,
    rarity: 1,
    _id: 0,
  };

  const results = await collection.find({}, { projection }).toArray();

  if (sortBy === 'price') {
    results.sort((a, b) => parseFloat(a.normal) - parseFloat(b.normal));
  } else {
    results.sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));
  }

  return new Response (JSON.stringify(results))
}
