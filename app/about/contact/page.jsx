"use client"
import { useState } from "react";

const ConatctPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Contact Page</h1>
        <p>This app uses React.</p>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)} className="btn btn-primary">Increment</button>
        <button onClick={() => count > 0 && setCount(count - 1)} className="btn btn-secondary">Decrement</button>
    </div>
  );
};

export default ConatctPage;
