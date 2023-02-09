import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import SearchFeatures from "./SearchFeatures";
import { obtainAllCountries } from "./api";
const GeographyApp = () => {
  const [block, setBlock] = useState([]);
  const [filteredBlock, setFilteredBlock] = useState([]);
  const [searchedBlock, setSearchedBlock] = useState([]);
  const obama = (message) => {
    console.log(message)
  }
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
      <SearchFeatures obama={obama}/>
      <Countries block={block}/>
    </div>
  );
};
export default GeographyApp;

