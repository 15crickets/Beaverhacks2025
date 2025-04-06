interface ImageGalleryProps {
    imageUrls: string[];
  }
  
  const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls }) => {
    return (
      <div>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} />
        ))}
      </div>
    );
  };
  
  export default function Page() {
    const imageUrls: string[] = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ];
  
    return <ImageGallery imageUrls={imageUrls} />;
  }
  