'use client';

import Image from 'next/image';

interface ImageButtonProps {
    src: string;
    alt: string;
    onClick: () => void;
    width?: number;
    height?: number;
  }

  const ImageButton = ({ src, alt, onClick, width = 100, height = 100 }: ImageButtonProps) => {
    return (
      <button onClick={onClick} className="p-0 border-none bg-transparent">
        <Image src={src} alt={alt} width={width} height={height} />
      </button>
    );
  };
  
  export default ImageButton;