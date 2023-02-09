import React, { useState } from "react";
import { obtainSearchInformation } from "./api";
const SearchFeatures = () => {
  const [country, setCountry] = useState("");
  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const listCountry = (e) => {
    e.preventDefault();
    obtainSearchInformation(country).then((res) => {
      console.log(res);
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