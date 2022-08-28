import type { TResults } from "../types";
import { image } from "../api";

function Display({
  text,
  votes,
}: {
  text: string;
  votes: TResults["worst" | "best"];
}) {
  return (
    <div className="flex flex-col">
      <div className="text-white text-center text-2xl font-semibold mb-3">
        {text}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {votes.map((result) => (
          <div>
            <img src={image(result.name)} alt="cat" className="rounded-3xl" />
            <div className="text-white text-center text-lg font-semibold">
              {result.votes} votes
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Results({ results }: { results: TResults }) {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-10">
        <Display text="Best 😊" votes={results.best}></Display>
        <Display text="Worst 😠" votes={results.worst}></Display>
      </div>
    </div>
  );
}
