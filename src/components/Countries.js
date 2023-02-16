import Country from "./Country";
import "./Stylesheets/CountriesStyle.css"
import React from "react";
const Countries = (props) => {
  const countries =
    props.regionFilter !== ""
      ? (props.block.filter(
          (country) => country.region === props.regionFilter
        ))
      : props.block;
  return (
    <div id="countries">
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </div>
  );
};
export default Countries;

// const listSelectedCountries = props.block.filter(
//   (country) => (country.name === region)
// );
// console.log("this is the filtered array", listSelectedCountries);

// import React, { useState, useEffect } from "react";
// import Country from "./Country";
// const Countries = (props) => {
//   const listSelectedCountries = props.block.filter(
//     (country) => (country.name === props.regionFilter)
//   );
//   console.log("pay attention to me", props);
//   if(props.regionFilter){
//       return (
//         <div>
//           {listSelectedCountries.map((country) => (
//             <Country key={country.name} country={country} />
//           ))}
//         </div>
//       );
//   }else{
//     return (
//       <div>
//         {props.block.map((country) => (
//           <Country key={country.name} country={country} />
//         ))}
//       </div>
//     );
//   }

// };
// export default Countries;

// const listSelectedCountries = props.block.filter(
//   (country) => (country.name === region)
// );
// console.log("this is the filtered array", listSelectedCountries);
