import { useState } from "react";
import Card from "./Card";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [play, setPlay] = useState(true);
  const [results, setResults] = useState<
    {
      name: string;
      votes: {
        wins: number;
        losses: number;
      };
    }[]
  >([]);

  const fetchResults = () => {
    setShowResults(true);
    fetch("https://cats-api.sunney.dev/results")
      .then((res) => res.json())
      .then(setResults);
  };

  return (
    <div
      className={`bg-black md:h-screen w-full flex flex-col items-center justify-center p-10`}
    >
      {showResults ? (
        <div>
          <div className="text-white text-center text-2xl font-semibold mb-10">
            Top 3 Results
          </div>

          <div className=" md:flex gap-10">
            {results.map((result) => (
              <div className="flex flex-col gap-2 mb-5">
                <img
                  src={`https://files.sunney.dev/cats/${result.name}`}
                  alt="cat"
                  width={200}
                  height={300}
                  className="object-center max-h-[500px] rounded-3xl"
                />
                <div>
                  <div className="text-white text-lg font-semibold">
                    {result.votes.wins} wins
                  </div>

                  <div className="text-white text-lg font-semibold">
                    {result.votes.losses} losses
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Card />
      )}
      <button
        onClick={() => {
          if (!showResults) {
            setPlay(false);
            setShowResults(true);
            fetchResults();
          } else {
            setPlay(true);
            setShowResults(false);
          }
        }}
        className="absolute right-0 top-0 m-4 text-black py-2 px-4 font-semibold bg-white rounded-xl hover:bg-zinc-800 hover:text-white transition-colors duration-200"
      >
        {showResults ? "Play" : "Results"}
      </button>
    </div>
  );
}

export default App;
