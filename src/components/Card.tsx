import Image from "./Image";
import { useEffect, useState } from "react";
import { getCats, image, vote } from "../api";
import Button from "./Button";
import CatSkeleton from "./CatSkeleton";

export default function Card() {
  const [images, setImages] = useState<[string, string]>();
  const [imagesLoading, setImagesLoading] = useState<{
    [key: number]: boolean;
  }>({ [0]: true, [1]: true });

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    setImagesLoading({ [0]: true, [1]: true });

    getCats().then((cats) =>
      "error" in cats ? alert(cats.error) : setImages(cats)
    );
  };

  const submitVote = (index: number) => {
    if (!images?.length) return;

    const winner = images[index];
    const loser = images[index === 0 ? 1 : 0];

    vote(winner, loser);
    loadImages();
  };

  return (
    <div className="md:w-5/6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {images?.map((img, index) => (
          <div className="flex flex-col md:mb-0 md:justify-between">
            <div className="mb-4">
              {imagesLoading[index] && <CatSkeleton />}
              <Image
                visible={!imagesLoading[index]}
                src={image(img)}
                onLoad={() =>
                  setImagesLoading((prev) => ({ ...prev, [index]: false }))
                }
              />
            </div>
            <Button onClick={() => submitVote(index)}>Vote</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
