import React, { useState, useEffect } from "react";
import "./App.css";
import resources from "../resources/countryData.json";

function App() {
  const [state, setState] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const checkEscape = (e) => {
    if (e.key === "Escape") {
      console.log("Escape");
      setFilteredData([]);
    } 
  };

  const handleSearch = () => {
    console.log("Search");
  };

  const changeInput = (e)=>{
    setState(e.target.value);
  }

  useEffect(() => {

    if (state !== "") {
      let filteredResults = resources.filter((item) => {
        return item.name.toLowerCase().startsWith(state.toLowerCase());
      });
      setFilteredData(filteredResults);
    } 

    else {
      setFilteredData([]);
    }

  }, [state]);


  return (
    <>
      <div className="inputBoxAndButton">
        <input type="text" onKeyUp={(e) => checkEscape(e)} onChange={(e) =>changeInput(e)} value={state} />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      <div>
        <ul>
        {filteredData.map((it, index) => (
          <li key={index}>{it.name}</li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default App;
