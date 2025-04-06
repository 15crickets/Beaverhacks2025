'use client';
import Image from "next/image";
import { MouseEventHandler } from "react";

interface ImageButtonProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const image_button: React.FC<ImageButtonProps> = ({
    src,
    alt,
    width,
    height,
    onClick,
    className = '',
  }) => {
    return (
      <button
        onClick={onClick}
        className={`p-0 border-none bg-transparent cursor-pointer ${className}`}
        style={{ display: 'inline-block' }}
      >
        <Image src={src} alt={alt} width={width} height={height} />
      </button>
    );
  };


export default image_button;