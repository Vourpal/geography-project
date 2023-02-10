import React, { useState, useEffect } from "react";
import Country from "./Country";
const Countries = (props) => {
  console.log("pay attention to me", props);
  // const listSelectedCountries = props.block.filter(
  //   (country) => (country.name === region)
  // );
  // console.log("this is the filtered array", listSelectedCountries);
  return (
    <div>
      {props.block.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </div>
  );
};
export default Countries;

// <Country key={props.listAllCountries.name} listAllCountries={props.listAllCountries}/> line 18

// <li>{country.name}</li>
// <li>{country.population}</li>
// TODO use filter method instead of map for listallcountries example




// const listSelectedCountries = (block, searchedBlock) => {
//   let filter = [];
//   filter = block.filter((country) => {
//     return searchedBlock.find((countryBlocks) => {
//       return country.name === country.countryBlock;
//     });
//   });
//   return filter;
// };