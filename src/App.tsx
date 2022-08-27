import type { TResults, Vote } from "./types";
import { useState } from "react";
import { getResults, image } from "./api";
import Card from "./Card";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<TResults>();

  const fetchResults = () =>
    getResults().then((res) =>
      "error" in res ? alert(res.error) : setResults(res)
    );

  return (
    <div
      className={`bg-black md:h-screen w-full flex flex-col items-center justify-center p-10`}
    >
      {showResults && results ? (
        <div className="h-screen">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <div className="text-white text-center text-2xl font-semibold mb-10">
                Best 😊
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                {results.best.map((result) => (
                  <div>
                    <img
                      src={image(result.name)}
                      alt="cat"
                      width={200}
                      height={300}
                      className="object-center max-h-[500px] rounded-3xl"
                    />
                    <div className="text-white text-center text-lg font-semibold">
                      {result.votes} votes
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-white text-center text-2xl font-semibold mb-10">
                Worst 😠
              </div>
              <div className="flex md:flex-row md:gap-4">
                {results.worst.map((result) => (
                  <div>
                    <img
                      src={image(result.name)}
                      alt="cat"
                      width={200}
                      height={300}
                      className="object-center max-h-[500px] rounded-3xl"
                    />
                    <div className="text-white text-center text-lg font-semibold">
                      {result.votes} votes
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Card />
      )}
      <button
        onClick={() => {
          setShowResults((prev) => {
            if (!prev) fetchResults();

            return !prev;
          });
        }}
        className="absolute right-0 top-0 m-4 text-black py-2 px-4 font-semibold bg-white rounded-xl hover:bg-zinc-800 hover:text-white transition-colors duration-200"
      >
        {showResults ? "Play" : "Results"}
      </button>
    </div>
  );
}

export default App;
