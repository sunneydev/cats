import { useEffect, useState } from "react";
import Button from "./Button";
import CatSkeleton from "./CatSkeleton";

export default function Card() {
  const [images, setImages] = useState<[string, string]>();
  const [imagesLoading, setImagesLoading] = useState<{
    [key: number]: boolean;
  }>({
    [0]: true,
    [1]: true,
  });

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    setImagesLoading({
      [0]: true,
      [1]: true,
    });
    fetch("https://cats-api.sunney.dev/cats")
      .then((res) => res.json())
      .then((res) => setImages(res.images));
  };

  return (
    <div className="w-2/3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {images?.map((image, index) => (
          <div className="flex flex-col mb-20 md:mb-0 md:justify-between md:min-h-[600px]">
            {imagesLoading[index] && <CatSkeleton />}
            <img
              src={`https://files.sunney.dev/cats/${image}`}
              alt="cat"
              width={300}
              height={400}
              className={`object-center max-h-[500px] rounded-3xl ${
                imagesLoading[index] ? "hidden" : "block"
              }`}
              onLoad={() =>
                setImagesLoading((prev) => ({
                  ...prev,
                  [index]: false,
                }))
              }
            />
            <Button
              onClick={() => {
                if (!images?.length) return;

                const winner = images[index];
                const loser = images[index === 0 ? 1 : 0];

                fetch(`https://cats-api.sunney.dev/vote/${winner}/${loser}`);
                loadImages();
              }}
            >
              Pick
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
