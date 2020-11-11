import "./App.css";
import "./index.scss";
import React, { useState } from "react";





function App() {
  const [color, setClickedLight] = useState("")
  console.log(color)
  return (
    <div>
      <div id="trafficTop"></div>
      <div id="container">
        <div className={"red light " + (color === "red"?"selected":"") } onClick={() => setClickedLight("red")}></div>
        <div className={"yellow light " + (color === "yellow"?"selected":"") } onClick={() => setClickedLight("yellow")}></div>
        <div className={"green light " + (color === "green"?"selected":"") } onClick={() => setClickedLight("green")}></div>
      </div>
    </div>
    );
  }
  
  

 

export default App;
