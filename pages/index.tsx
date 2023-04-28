import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount((prevCount) => ++prevCount);

  return (
    <>
      <h2>Hello Next Gen Developer!</h2>
      <button onClick={handleClick}>{count} clicked</button>
    </>
  );
}
