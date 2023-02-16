import React, { useState } from "react";
import { obtainSearchInformation } from "./api";
import "./Stylesheets/SearchFeaturesStyle.css";
const SearchFeatures = (props) => {
  const [country, setCountry] = useState("");
  const onRegionChange = (e) => {
    props.setRegionFilter(e.target.value);
  };
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
    <div id="navBar">
      <div id="searchBar">
        <input
          placeholder="Search for a Country..."
          name="searchBar"
          onChange={onCountryChange}
        ></input>
        <button name="searchBar" onClick={listCountry}>
          click me
        </button>
      </div>
      <select defaultValue="" onChange={onRegionChange}>
        <option disable="true" hidden value="">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFeatures;
// probably use onChange for the filter portion
//    <button name="searchBar" onClick={() => {
//   props.obama("pito grande")
// }}>
