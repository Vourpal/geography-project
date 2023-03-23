import "./Stylesheets/CountryStyle.css";
import React from "react";
const Country = (props) => {
  return (
    <div id="Country">
      <img src={props.country.flag} alt="Country flag" id="flag"></img>
      <div className="country-part" id="name">{props.country.name}</div>
      <div className="country-part"><span className="bold">Population: </span>{props.country.population}</div>
      <div className="country-part"><span className="bold">Region: </span>{props.country.region}</div>
      <div className="country-part"><span className="bold">Capital: </span>{props.country.capital}</div>
    </div>
  );
};

export default Country;

// <img alt="flag of respective country">flag</img>
// <div>{countryName}</div>
// <div>{countryPopulation}</div>
// <div>{countryRegion}</div>
// <div>{countryCapital}</div>
