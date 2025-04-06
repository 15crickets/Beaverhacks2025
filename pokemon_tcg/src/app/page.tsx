'use client'

import ImageButton from "@/components/image_button";
import { useRouter } from 'next/navigation'
import EmphasizeImage from "@/components/emphasize_image";

export default function Home() {
  const router = useRouter()

  const handleImageClick = () => {
    router.push('/set1')
  }
  
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mx-10 my-10">
        <div className="col-span-1 gap-4">
          <EmphasizeImage
            src="/images/surging_sparks.jpg"
            alt="Surging Sparks"
            width={200}
            height={200}
            link="/set1"
          />
        </div>
        <div className="col-span-1 gap-4">
          <EmphasizeImage
            src="/images/journey_together.jpg"
            alt="Journey Together"
            width={200}
            height={200}
            link="/set2"
          />
        </div>
      </div>
    </div>
  );
}