import Image from "next/image";
import ImagePanels from "@/components/image_gallery";
import {runCode} from "@/components/accessing_stuff"




export default async function Home() {
 const listImages = await runCode();
 if(listImages && listImages.length > 0){
   console.log("HIIIII: " + listImages[0]);
 }








   return (
<div className = "w-screen">
   <div className="grid grid-cols-3">
       {listImages?.map((item:string, index:number) => (
         <img key={index} src={item}>
           {/* You can add content or styles here */}
         </img>
       ))}
     </div>
</div>
   );
 }
