import "./App.css";
import Lists from "./Componenta/Lists";
import Data from "./Componenta/Data";
import { useState } from "react";

function App() {
  const [state, setstate] = useState(Data);


  const clearHandler= ()=>{

    setstate([])

  }

  

  return (
    <>
    <div className="main">

      <section className="container">
        <h3>{`${state.length} birthday today`}</h3>
        <Lists state={state} newState={setstate} />
        <button onClick={clearHandler}>clear all</button>
      </section>
    </div>
    </>
  );
}

export default App;
