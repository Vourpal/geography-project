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
      console.log(res);
      const searchedCountries = res.data.map((e) => {
        return {
          name: e.name.common,
          region: e.region,
          capital: e.capital[0],
          population: e.population,
          flag: e.flags.svg,
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
          id="search"
        ></input>
        <button name="searchBar" onClick={listCountry} id="search-button">
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.4 490.4"
          >
            <g>
              <path
                d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
         s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
          M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"
              />
            </g>
          </svg>
        </button>
      </div>
      <select defaultValue="" onChange={onRegionChange}>
        <option disable="true" hidden value="" id="filter">
          Filter by Region
        </option>
        <option value="Africa" className="filter-region">Africa</option>
        <option value="Americas" className="filter-region">America</option>
        <option value="Asia" className="filter-region">Asia</option>
        <option value="Europe" className="filter-region">Europe</option>
        <option value="Oceania" className="filter-region">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFeatures;
// probably use onChange for the filter portion
//    <button name="searchBar" onClick={() => {
//   props.obama("pito grande")
// }}>
