import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import SearchFeatures from "./SearchFeatures";
import { obtainAllCountries } from "./api";
import "./Stylesheets/GeographyStyle.css"
const GeographyApp = () => {
  const [block, setBlock] = useState([]);
  const [regionFilter, setRegionFilter] = useState("");

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
      <SearchFeatures setBlock={setBlock} setRegionFilter={setRegionFilter} />
      <Countries
        block={block}
        setBlock={setBlock}
        regionFilter={regionFilter}
      />
    </div>
  );
};
export default GeographyApp;
