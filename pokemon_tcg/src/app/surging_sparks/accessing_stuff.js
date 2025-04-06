'use server';

import clientPromise from '@/lib/mongodb';

export default async function AccessingStuff() {
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

  const results = await collection.find({}, { projection }).toArray();

  const imageList = results.map((doc) => doc.image);
  const nameList = results.map((doc) => doc.name);
  const priceList = results.map((doc) => doc.normal);
  const rarityList = results.map((doc) => doc.rarity);

  return (
    <>
      {imageList.map((item, index) => (
        <div key={index} className="flex flex-col w-fit">
          <img src={item} alt={`Image ${index}`} className="mb-2" />
          <div className="bg-[#070826] mt-3 rounded-xl mb-15 w-full">
            <p className="text-center font-bold">{nameList[index]}</p>
            <p className="text-center font-bold">{rarityList[index]}</p>
            <p className="text-center font-bold">${priceList[index]}</p>
          </div>
        </div>
      ))}
    </>
  );
}
