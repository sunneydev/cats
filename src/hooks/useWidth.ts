import { useEffect, useState } from "react";

const proportion = (height: number, scale?: number) =>
  height * 0.5 * (scale || 1);

export default function useWidth(scale?: number) {
  const [width, setWidth] = useState(proportion(window.innerHeight, scale)); // 0.5 is the aspect ratio of the image

  useEffect(() => {
    const listener = () => setWidth(proportion(window.innerHeight, scale));

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return width;
}
