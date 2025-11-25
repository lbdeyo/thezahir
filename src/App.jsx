import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      ``
      <div>
        <h1>Welcome to The Zahir</h1>
        <p>A React application built with Vite</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Your React journey begins here</p>
    </>
  );
}
``;
export default App;
