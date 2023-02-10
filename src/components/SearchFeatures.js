import React, { useState } from "react";
import { obtainSearchInformation } from "./api";
const SearchFeatures = (props) => {
  const [country, setCountry] = useState("");
  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const listCountry = (e) => {
    e.preventDefault();
    obtainSearchInformation(country).then((res) => {
      const searchedCountries = res.data.map((e) => {
        return {
          name: e.name.common,
          region: e.region,
          capital: e.capital[0],
          population: e.population,
        };
      });
      props.setBlock(searchedCountries);
    });
  };
  return (
    <div>
      <input
        placeholder="Search for a Country..."
        name="searchBar"
        onChange={onCountryChange}
      ></input>
      <button name="searchBar" onClick={listCountry}>
        click me
      </button>
    </div>
  );
};

export default SearchFeatures;
// probably use onChange for the filter portion
//    <button name="searchBar" onClick={() => {
//   props.obama("pito grande")
// }}>
