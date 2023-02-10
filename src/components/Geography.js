import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import SearchFeatures from "./SearchFeatures";
import { obtainAllCountries } from "./api";
const GeographyApp = () => {
  const [block, setBlock] = useState([]);
  const [regionFilter, setRegionFilter] = useState("");
  // const [searchedBlock, setSearchedBlock] = useState([]);
  const obama = (message) => {
    console.log(message)
  }
  // let arrays = Array.isArray(searchedBlock)
  // console.log(arrays)
  useEffect(() => {
    obtainAllCountries().then((res) => {
      const countries = res.data.map((e) => {
        return {
          name: e.name,
          region: e.region,
          capital: e.capital,
          population: e.population,
        };
      });
      setBlock(countries);
    });
  }, []);
  return (
    <div>
      <header>Where in the world?</header>
      <SearchFeatures obama={obama} setBlock={setBlock}/>
      <Countries block={block} setBlock={setBlock} regionFilter={regionFilter}/>
    </div>
  );
};
export default GeographyApp;