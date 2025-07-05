import { useState } from "react";
import "./App.css";
import Toaster from "./Toaster";
// import { getByTitle } from "@testing-library/dom";
import Pagenotfound from "./Pagenotfound";
import EnhancedTable from "./EnhancedTable";
// import HotToaster from "./HotToaster";

function App() {
  const [show, isSHow] = useState(false);
  // const {is}= useToaster();
  const notify = () => {
    isSHow(true);
  };
  const closeButton = () => {
    debugger;
   isSHow(false);
  };
  // function SplitButtons() {
  //   return (
  //     // using a grid with 3 columns
  //     <div className="grid grid-cols-[1fr_1px_80px] w-full">
  //         <h3 className="text-zinc-800 text-sm font-semibold">success</h3>
  //         <p className="text-sm">Form has been submitted</p>
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      <Pagenotfound />
      <Toaster
        show={show}
        toastType={"success"}
        title={"wow so easy"}
        theme={"light"}
        position="middle"
        closeButton={closeButton}
      />
      <button onClick={notify}>Notify!</button>
      <EnhancedTable />
      {/* <HotToaster Toaster
        show={show}
        toastType={"successs"}
        title={"wow so easy"}/> */}
      {/* <header className="App-header">
        
        
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
