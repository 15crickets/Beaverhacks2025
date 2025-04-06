'use client'

import ImageButton from "@/components/image_button";
import { useRouter } from 'next/navigation'
import EmphasizeImage from "@/components/emphasize_image";
import {calculateAverageValues} from "@/components/calculate";

export default function Home() {
  return (
    <div>
      <div className="flex justify-items-center grid grid-cols-5 gap-7 mx-10 my-10">
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
            <p className = "text-center">MP: $7.48</p>
            <p className = "text-center">EV: $3.32</p>
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
            <p className = "text-center">MP: $7</p>
            <p className = "text-center">EV: $4.81</p>
            </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/prismatic_evolutions.jpg"
            alt="Prismatic Evolutions"
            width={197}
            height={366}
            link="/prismatic_evolutions"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Prismatic Evolutions</p>
            <p className = "text-center">MP: $13.10</p>
            <p className = "text-center">EV: $4.37</p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/stellar_crown.jpg"
            alt="Stellar Crown"
            width={197}
            height={366}
            link="/stellar_crown"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Stellar Crown</p>
            <p className = "text-center">MP: $5.95</p>
            <p className = "text-center">EV: $2.91</p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/shrouded_fable.jpg"
            alt="Shrouded Fable"
            width={197}
            height={366}
            link="/shrouded_fable"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Shrouded Fable</p>
            <p className = "text-center">MP: $5.89</p>
            <p className = "text-center">EV: $3.90</p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/twilight_masquerade.jpg"
            alt="Twilight Masquerade"
            width={197}
            height={366}
            link="/twilight_masquerade"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Twilight Masquerade</p>
            <p className = "text-center">MP: $6.93</p>
            <p className = "text-center">EV: $3.18</p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/temporal_forces.jpg"
            alt="Temporal Forces"
            width={197}
            height={366}
            link="/temporal_forces"
          />
           <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Temporal Forces</p>
            <p className = "text-center">MP: $5.44</p>
            <p className = "text-center">EV: $3.09</p>
            </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/paldean_fates.jpg"
            alt="Paldean Fates"
            width={197}
            height={366}
            link="/paldean_fates"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Paldean Fates</p>
            <p className = "text-center">MP: $8.50</p>
            <p className = "text-center">EV: $2.27</p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/paradox_rift.jpg"
            alt="Paradox Rift"
            width={197}
            height={366}
            link="/paradox_rift"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Paradox Rift</p>
            <p className = "text-center">MP: $5.92</p>
            <p className = "text-center">EV: $3.07</p>
          </div>
        </div>
        <div className="col-span-1 gap-4 w-fit">
          <EmphasizeImage
            src="/images/pokemon_151.jpg"
            alt="Pokemon 151"
            width={197}
            height={366}
            link="/pokemon_151"
          />
          <div className = "bg-[#070826] mt-3 rounded-xl">
            <p className = "text-center">Pokemon 151</p>
            <p className = "text-center">MP: $8.17</p>
            <p className = "text-center">EV: $6.97</p>
          </div>
        </div>
      </div>
    </div>
  );
}