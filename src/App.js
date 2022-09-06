import Square from "./components/Square";
import { useState, useEffect } from "react";

function App() {
  const [noq, setNoq] = useState(9);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(Array.from({ length: noq }, (_, index) => index + 1));
  }, [noq]);

  return (
    <>
      <input type="number" className="flex mx-auto" placeholder="Number of square" onChange={(e) => setNoq(e.target.value)}></input>
      <div className="App h-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-teal-300 grid justify-center content-center">
        {arr.map((item, i) => (
          <Square key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
