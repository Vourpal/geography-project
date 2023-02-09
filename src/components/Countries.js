import React, { useState, useEffect } from "react";
import Country from "./Country";
const Countries = (props) => {
  const region = "Asia"
  console.log(props)
  const listAllCountries = props.block.filter((country) => country.region=== region);
  return (
    <div>
      {listAllCountries.map((country) => (
        <Country key={country.name} country={country}/>
      ))}
    </div>
  );
};
export default Countries;

// <Country key={props.listAllCountries.name} listAllCountries={props.listAllCountries}/> line 18

// <li>{country.name}</li>
// <li>{country.population}</li>
// TODO use filter method instead of map for listallcountries example