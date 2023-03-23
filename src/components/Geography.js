import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import SearchFeatures from "./SearchFeatures";
import CountryDetails from "./CountryDetails";
import { obtainAllCountries } from "./api";
import "./Stylesheets/GeographyStyle.css";
const GeographyApp = () => {
  const [block, setBlock] = useState([]);
  const [regionFilter, setRegionFilter] = useState("");
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [countryCodes, setCountryCodes] = useState(new Map());
  const [dynamicSearch, setDynamicSearch] = useState("");

  const initialData = () => {
    obtainAllCountries().then((res) => {
      console.log(res, "initial block data before reformat");
      const codeTranslations = new Map();
      const countries = res.data.map((e) => {
        if (!e.currencies || !e.languages) {
          console.log(e);
        }
        codeTranslations.set(e.alpha3Code, e.name);
        return {
          alpha3Code: e.alpha3Code,
          name: e.name,
          nativename: e.nativeName,
          region: e.region,
          subregion: e.subregion,
          capital: e.capital,
          tld: e.topLevelDomain,
          currencies: e.currencies ? e.currencies.map((e) => e.name) : [],
          languages: e.languages.map((h) => h.name),
          population: e.population.toLocaleString("en-US"),
          flag: e.flags.png,
          borders: e.borders,
          svgFlag: e.flags.svg
        };
      });
      setCountryCodes(codeTranslations);
      setBlock(countries);
    });
  };

  useEffect(() => {
    initialData();
  }, []);

  const query = dynamicSearch;
  const filterCountries = block.filter((country) => {
    return country.name.toLowerCase().includes(query.toLowerCase());
  });
  console.log("mabinogi", filterCountries);
  if (selectedCountryDetails !== null) {
    return (
      <div>
        <header id="header">Where in the world?</header>
        <CountryDetails
          selectedCountryDetails={selectedCountryDetails}
          setSelectedCountryDetails={setSelectedCountryDetails}
          setBlock={setBlock}
          countryCodes={countryCodes}
        />
      </div>
    );
  } else {
    return (
      <div id="body-wrapper">
        <header id="header">Where in the world?</header>
        <SearchFeatures
          setBlock={setBlock}
          setRegionFilter={setRegionFilter}
          block={block}
          originData={initialData}
          setDynamicSearch={setDynamicSearch}
        />
        <Countries
          block={filterCountries}
          regionFilter={regionFilter}
          setSelectedCountryDetails={setSelectedCountryDetails}
        />
      </div>
    );
  }
};
export default GeographyApp;

// selectedCountryDetails !== ""
// ? return(
//   <div>
//     <header>Where in the world?</header>
//     <CountryDetails/>
//   </div>
// ): return(
//   <div id="body-wrapper">
//     <header id="header">Where in the world?</header>
//     <SearchFeatures setBlock={setBlock} setRegionFilter={setRegionFilter} />
//     <Countries
//       block={block}
//       regionFilter={regionFilter}
//       setSelectedCountryDetails={setSelectedCountryDetails}
//     />
// </div>

// )

// OK YOU STINKY BITCH THIS IS WHAT WE GONNA DO, PROBABLY USE CONDITIONAL RENDERING IN GeographyApp SO THAT YOU CAN SAY
// IF YOU RECEIVE THE VALUE FROM CLIKCING ONE OF THE CARDS "RETRIEVE COUNTRY.NAME" THEN IT WILL RENDER OUR NEW
// FUNCTIONAL COMPONENT CALLEDE CARDDETAILS OR SUM SHIT AND THEN WE JUST DO THE EASY SHIT EZ.
// YOU MIGHT NEED TO MAKE A NEW USE STATE IN GeographyApp AND RETRIEVE DATA FROM COUNTRY OR COUNTRIES IDK YET.

// return (
//     <div id="body-wrapper">
//       <header id="header">Where in the world?</header>
//       <SearchFeatures setBlock={setBlock} setRegionFilter={setRegionFilter} />
//       <Countries
//         block={block}
//         regionFilter={regionFilter}
//         setSelectedCountryDetails={setSelectedCountryDetails}
//       />
//     </div>
//   );

// .map((e) => (e.name)),
