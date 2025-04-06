'use client'
import ImageButton from "@/components/image_button";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleImageClick = () => {
    router.push('/set1')
  }
  
  return (
    <div className="grid cols-5 gap-4">
      <div className="col-span-1">
      <ImageButton
          src="/images/surging_sparks.jpg"
          alt="Surging Sparks"
          width={200}
          height={200}
          onClick={handleImageClick}
        />
      </div>
      
    </div>

  );
}