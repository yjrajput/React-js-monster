import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalCount = useRef(null);

  useEffect(() => {
    intervalCount.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

 
    return () => clearInterval(intervalCount.current);
  }, []); 

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={() => clearInterval(intervalCount.current)}>Stop</button>
    </div>
  );
};

export default Timer;
