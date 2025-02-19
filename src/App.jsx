import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World, Dev1!!!</h1>
      <h1>Hello World, Dev2!!!</h1>

      <h2>Welcome, Dev1!!!</h2>
      <h2>Welcome, Dev2!!!</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          quas unde aperiam quaerat reiciendis maxime ullam nihil animi sunt
          corrupti excepturi, esse accusantium quae quibusdam sed minima. Fugit,
          eveniet mollitia. At animi vitae, labore nostrum, a impedit laboriosam
          porro voluptates ut vel quidem consequatur qui reprehenderit sapiente
          doloribus et odit velit sed id? Animi laudantium et excepturi culpa
          quibusdam dolor?
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
