'use client'

import ImageButton from "@/components/image_button";
import { useRouter } from 'next/navigation'
import EmphasizeImage from "@/components/emphasize_image";
import {calculateAverageValues} from "@/components/calculate";

export default function Home() {
  return (
    <div>
      <div className="flex grid grid-cols-5 gap-4 mx-10 my-10">
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/surging_sparks.jpg"
            alt="Surging Sparks"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Surging Sparks</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/journey_together.jpg"
            alt="Journey Together"
            width={197}
            height={366}
            link="/journey_together"
          />
           <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Journey Together</p>
            <p className = "text-center">EV: </p>
            </div>
        </div>
      </div>
    </div>
  );
}