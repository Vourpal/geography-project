import Country from "./Country";
import "./Stylesheets/CountriesStyle.css";
import React from "react";
const Countries = (props) => {
  const details = (country) => {
    props.setSelectedCountryDetails(country);
  };
  const countries =
    props.regionFilter !== ""
      ? props.block.filter((country) => country.region === props.regionFilter)
      : props.block;

  return (
    <div id="countries">
      {countries.map((country) => (
        <button className="country-button" key={country.name} onClick={() => {
          details(country)
        }}>
          <Country country={country} />
        </button>
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




// import { useState } from "react";
// import Country from "./Country";
// import "./Stylesheets/CountriesStyle.css";
// const Countries = (props) => {
//   const [buttonValue, setButtonValue] = useState("")
//   const details = () => {
//     props.setSelectedCountryDetails(buttonValue);
//   };
//   if(buttonValue === ""){
//     console.log("obama")
//   }else{
//     details()
//   }
//   const countries =
//     props.regionFilter !== ""
//       ? props.block.filter((country) => country.region === props.regionFilter)
//       : props.block;

//   return (
//     <div id="countries">
//       {countries.map((country) => (
//         <button className="country-button" key={country.name} onClick={() => {setButtonValue(country.name)}}>
//           <Country country={country} />
//         </button>
//       ))}
//     </div>
//   );
// };
// export default Countries;

