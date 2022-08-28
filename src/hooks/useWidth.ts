import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(window.innerHeight * 0.5); // 0.5 is the aspect ratio of the image

  useEffect(() => {
    const listener = () => setWidth(window.innerHeight * 0.5);

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return width;
}
