'use client'

import ImageButton from "@/components/image_button";
import { useRouter } from 'next/navigation'
import EmphasizeImage from "@/components/emphasize_image";

export default function Home() {
  return (
    <div>
      <div className="flex grid grid-cols-5 gap-7 mx-10 my-10">
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
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/prismatic_evolutions.jpg"
            alt="Prismatic Evolutions"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Prismatic Evolutions</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/stellar_crown.jpg"
            alt="Stellar Crown"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Stellar Crown</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/shrouded_fable.jpg"
            alt="Shrouded Fable"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Shrouded Fable</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/twilight_masquerade.jpg"
            alt="Twilight Masquerade"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Twilight Masquerade</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/temporal_forces.jpg"
            alt="Temporal Forces"
            width={197}
            height={366}
            link="/journey_together"
          />
           <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Temporal Forces</p>
            <p className = "text-center">EV: </p>
            </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/paldean_fates.jpg"
            alt="Paldean Fates"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Paldean Fates</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/paradox_rift.jpg"
            alt="Paradox Rift"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Paradox Rift</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/pokemon_151.jpg"
            alt="Pokemon 151"
            width={197}
            height={366}
            link="/surging_sparks"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Pokemon 151</p>
            <p className = "text-center">EV: </p>
          </div>
        </div>
      </div>
    </div>
  );
}