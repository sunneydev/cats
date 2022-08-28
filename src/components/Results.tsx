import type { TResults } from "../types";
import { getResults, image } from "../api";
import { useEffect, useState } from "react";
import CatSkeleton from "./CatSkeleton";
import useWidth from "../hooks/useWidth";

function Display({
  text,
  votes,
}: {
  text: string;
  votes: TResults["worst" | "best"];
}) {
  const width = useWidth(0.5);

  return (
    <div className="flex flex-col">
      <div className="text-white text-center text-2xl font-semibold mb-3">
        {text}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        {votes.map((result) => (
          <div>
            {result.name === "fake" ? (
              <CatSkeleton w={width} />
            ) : (
              <img
                src={image(result.name)}
                width={width}
                alt="cat"
                className="rounded-3xl"
              />
            )}
            <div className="text-white text-center text-lg font-semibold">
              {result.votes} votes
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Results() {
  const [results, setResults] = useState<TResults>({
    best: Array.from({ length: 3 }, () => ({ name: "fake", votes: 0 })),
    worst: Array.from({ length: 3 }, () => ({ name: "fake", votes: 0 })),
  });

  useEffect(() => {
    getResults().then((res) =>
      "error" in res ? alert(res.error) : setResults(res)
    );
  }, []);

  return (
    <div className="md:h-screen">
      <div className="flex flex-col gap-10 h-full">
        <Display text="Best 😊" votes={results.best}></Display>
        <Display text="Worst 😠" votes={results.worst}></Display>
      </div>
    </div>
  );
}
