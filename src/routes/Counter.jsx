import { createEffect, createSignal } from "solid-js";

function Counter() {
  const [counter, setCounter] = createSignal(0);
  const doubleCounter = () => counter() * 2;

  createEffect(() => {
    console.log("Effect - executed because counter updated", counter());
  });

  return (
    <div id="Counter" class="content-container">
      <p>
        <b>Counter:</b> {counter()} <b>and Double Counter:</b> {doubleCounter()}
      </p>
      <div id="actions">
        <button class="counter-example"
          onClick={() => setCounter(counter() - 1)}>-</button>
        <button class="counter-example"
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;