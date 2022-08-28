import React from "react";
import ContentLoader from "react-content-loader";
import useWidth from "../hooks/useWidth";

function CatSkeleton() {
  const width = useWidth();

  return (
    <ContentLoader
      speed={0.6}
      width={width}
      height={width * 1.333333} // 4:3 aspect ratio
      viewBox="0 0 400 400"
      className="border border-zinc-800 border-1 rounded-3xl"
      backgroundColor="#252525"
    >
      <path d="M 151.35 307.2 h 113 c 0 -16.06 -1.15 -19.25 -27.75 -19.25 c 4.25 -12.75 21.52 -43.59 31.12 -43.59 c 8.5 0 18.63 0.47 18.63 19.84 c 0 22 37.02 57.48 46 43 c 13.38 -21.56 -23 -14.98 -23 -67 c 0 -71.15 41.52 -61.02 41.52 -101 c 0 -20 -5.52 -22.7 -5.52 -37 c 0 -18.893 16.65 -17.796 13.41 -33.465 c -2.24 -10.823 -3.99 -19.503 -5.29 -32.591 c -0.93 -9.287 -1.23 -19.185 -10.87 -18.787 c -11.33 0.468 -15.63 20.417 -33.25 21.848 c -17.58 1.427 -32.57 -14.967 -39.38 -12.625 c -6.74 2.321 -4.62 20.625 -0.62 33.625 c 6.29 20.432 20 46.995 -5 50.995 s -68 8 -99 49 s -29.86 89.12 -42 104 c -40.759 49.96 -82.526 29.45 -82.526 71 c 0 18.61 31.525 32 36.525 26 s -42.485 -23.87 10.646 -45 c 45.395 -18.04 49.445 -21.72 63.355 -9 z" />
    </ContentLoader>
  );
}

export default React.memo(CatSkeleton);
