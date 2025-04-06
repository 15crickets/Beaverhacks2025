
 import Image from "next/image";
 import ImagePanels from "@/components/image_gallery";
 import {runCode} from "@/components/accessing_stuff"
 
 
 
 
 export default async function Home() {
  const allLists = await runCode();
  let listImages = [];
  let listNames = [];
  let listPrice = [];
  let listRarity = [];
 
 
  if(allLists){
    listImages = allLists[0];
    listNames = allLists[1];
    listPrice = allLists[2];
    listRarity = allLists[3];
  }
  if(listImages && listImages.length > 0){
    console.log("HIIIII: " + listImages[0]);
  }
  return (
    <div className="w-screen">
        <div className="grid grid-cols-3 justify-items-center">
            {listImages?.map((item:string, index:number) => (
                <div key={index} className="flex flex-col w-fit">
                    <img src={item} alt={`Image ${index}`} className="mb-2" />
                    <div className = "bg-[#070826] mt-3 rounded-xl mb-15 w-full">
                      <p className="text-center font-bold">{listNames[index]}</p>
                      <p className="text-center font-bold">{listRarity[index]}</p>
                      <p className="text-center font-bold">${listPrice[index]}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
 );
 
 
 
 
  }
 