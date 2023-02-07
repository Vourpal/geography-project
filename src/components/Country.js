import React, { useState } from "react";
import { obtainAllCountries } from "./api";
const Country = () => {
  const [block, setBlock] = useState([]);
  const [filteredBlock, setFilteredBlock] = useState([]);
  const [searchedBlock, setSearchedBlock] = useState([]);
  const allCountries = () => {
    setBlock(
      obtainAllCountries().then((res) => {
        return res.data.map((e) => {
          return e.name
          
        })
      })
    );
  };

  return (
    <div>
      <div>{block && <p>{block}</p>}</div>
      <div>image will be placed here</div>
      <div>countryName</div>
      <div>countryPopulation</div>
      <div>countryRegion</div>
      <div>countryCapital </div>

      <button onClick={allCountries}>click me</button>
      <button onClick={() => {
        console.log(block)
      }}>click me after</button>
    </div>
  );
};

export default Country;

// <img alt="flag of respective country">flag</img>
// <div>{countryName}</div>
// <div>{countryPopulation}</div>
// <div>{countryRegion}</div>
// <div>{countryCapital}</div>
