import Image from "next/image";

export default function Home() {
  return (
    <div className="grid cols-5 gap-4">
      <div className="col-span-1">
        <Image
          src="/images/surging_sparks.jpg"
          alt="Image 1"
          width={200}
          height={200}
          className="rounded-lg shadow-md"
          />
      </div>
      
    </div>

  );
}
