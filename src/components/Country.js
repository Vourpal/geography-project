import "./Stylesheets/CountryStyle.css"
import React from "react";
const Country = (props) => {
  return (
    <div id="Country">
      <div>image will be placed here</div>
      <div>{props.country.name}</div>
      <div>{props.country.population}</div>
      <div>{props.country.region}</div>
      <div>countryCapital </div>

      <button>click me</button>
      <button>click me after</button>
    </div>
  );
};

export default Country;

// <img alt="flag of respective country">flag</img>
// <div>{countryName}</div>
// <div>{countryPopulation}</div>
// <div>{countryRegion}</div>
// <div>{countryCapital}</div>
