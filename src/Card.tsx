import { useEffect, useMemo, useState } from "react";
import { getCats, image, vote } from "./api";
import Button from "./Button";
import CatSkeleton from "./CatSkeleton";

export default function Card() {
  const [height, setHeight] = useState(0);
  const [images, setImages] = useState<[string, string]>();
  const [imagesLoading, setImagesLoading] = useState<{
    [key: number]: boolean;
  }>({
    [0]: true,
    [1]: true,
  });

  useEffect(() => {
    const listener = () => setHeight(window.innerHeight);

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    setImagesLoading({
      [0]: true,
      [1]: true,
    });

    getCats().then((cats) =>
      "error" in cats ? alert(cats.error) : setImages(cats)
    );
  };

  return (
    <div className="md:w-5/6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {images?.map((img, index) => (
          <div className="flex flex-col md:mb-0 md:justify-between">
            <div className="mb-4">
              {imagesLoading[index] && <CatSkeleton />}
              <img
                src={image(img)}
                alt="cat"
                width={height > 640 ? 532 : 300}
                height={709}
                className={`object-center rounded-3xl ${
                  imagesLoading[index] ? "hidden" : "block"
                }`}
                onLoad={() =>
                  setImagesLoading((prev) => ({
                    ...prev,
                    [index]: false,
                  }))
                }
              />
            </div>
            <Button
              onClick={() => {
                if (!images?.length) return;

                const winner = images[index];
                const loser = images[index === 0 ? 1 : 0];

                vote(winner, loser);
                loadImages();
              }}
            >
              Vote
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
