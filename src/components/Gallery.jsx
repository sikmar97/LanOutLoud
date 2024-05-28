import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function Gallery({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="pt-20">
        <h1 className="text-center font-bold text-white text-4xl">BILDER FRÅN LAN OUT LOUD OKTOBER 2022</h1>
    <div className="grid max-md:grid-cols-1 xl:grid-cols-2 gap-3 pt-5">
      {images &&
        images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              imageUrl={imageUrl}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
    </div>
    
  );
}

function GridGalleryCard({ imageUrl, show }) {
  return (
    <div
      className={`relative transition ease-in  duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <img src={imageUrl} alt="" />
    </div>
  );
}
