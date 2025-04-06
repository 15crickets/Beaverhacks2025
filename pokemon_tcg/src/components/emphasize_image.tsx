// components/EmphasizeImage.tsx
'use client';

import Image_button from "./image_button";
import { useRouter } from 'next/navigation';

interface EmphasizeImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  link?: string; // optional route
}

export default function EmphasizeImage({
  src,
  alt = "Image",
  width = 200,
  height = 200,
  className = "",
  link = "", 
}: EmphasizeImageProps) {
  const router = useRouter();

  const handleImageClick = () => {
    router.push(link);
  };

  return (
    <div
      style={{ width, height }}
      className=""
    >
      <Image_button
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-transform duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:shadow-2xl rounded-2xl ${className}`}
        onClick={handleImageClick}
      />
    </div>
  );
}
