import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";
function Counter() {
  const counterState = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>
        Incriment
      </button>
      <button
        onClick={() =>
          counterState.count <= 0
            ? 0
            : counterState.setCount(counterState.count - 1)
        }
      >
        Decriment
      </button>
    </div>
  );
}

export default Counter;
