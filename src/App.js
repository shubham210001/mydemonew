import { useState } from "react";
import "./App.css";
import Toaster from "./Toaster";
import { getByTitle } from "@testing-library/dom";
import Pagenotfound from "./Pagenotfound";

function App() {
  const [show, isSHow]= useState(false);
  // const {is}= useToaster();
  const notify=()=>{
    isSHow(true);
  }

  return (
    <div className="App">
      <Pagenotfound/>
      {/* <header className="App-header">
        <button onClick={notify}>Notify!</button>
        <Toaster show={show} title={"Hellow how are you"}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
