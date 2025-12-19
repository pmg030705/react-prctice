import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    // setCounter is called only once due to batching
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const reduceValue = () => {
    // batching cannot be done as every callback values will be different
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
  };

  return (
    <>
      <h1>React practice</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={reduceValue}>Remove Value</button>
      <p>Footer: {counter} </p>
    </>
  );
}

export default App;
