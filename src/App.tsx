import { useState } from "react";
import Results from "./components/Results";
import Card from "./components/Card";

function App() {
  const [showResults, setShowResults] = useState(false);
  
  return (
    <div
      className={`bg-black md:h-screen w-full flex flex-col items-center justify-center p-10`}
    >
      <button
        onClick={() => setShowResults((prev) => !prev)}
        className="absolute right-0 top-0 m-4 text-black py-2 px-4 font-semibold bg-white rounded-xl hover:bg-zinc-800 hover:text-white transition-colors duration-200"
      >
        {showResults ? "Play" : "Results"}
      </button>
      {showResults ? <Results /> : <Card />}
    </div>
  );
}

export default App;
