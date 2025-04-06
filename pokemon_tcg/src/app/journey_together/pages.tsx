import Image from "next/image";
import ImagePanels from "@/components/image_gallery";
import {runCode} from "@/components/accessing_stuff"




export default async function Home() {
 const listImages = await runCode();
 if(listImages && listImages.length > 0){
   console.log("HIIIII: " + listImages[0]);
 }
}
/*

   return (
<div className = "">
   <div className="grid grid-cols-3 justify-items-center">
       {listImages?.map((item:string, index:number) => (
        <div className="w-3/7">
          <img className="w-full" key={index} src={item}>
            {}
          </img>
          <div className = "bg-[#070826] mt-3 rounded-xl mb-15">
          <p className = "text-center">Journey Together</p>
          <p className = "text-center">EV: </p>
          </div>
         </div>
       ))}
     </div>
</div>
   );
 }

*/