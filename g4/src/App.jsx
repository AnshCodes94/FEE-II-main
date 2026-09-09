//counter button
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg1 fxc">
      <div className="box1 fx" style={{ alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </section>
  );
}

export default App;