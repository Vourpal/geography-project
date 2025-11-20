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

  const initialData = async () => {
    try {
      const res = await obtainAllCountries();
      const codeTranslations = new Map();

      const countries = res.data.map((e) => {
        const currencyNames = e.currencies
          ? Object.values(e.currencies).map((c) => c.name)
          : [];

        const languageNames = e.languages
          ? Object.values(e.languages)
          : [];

        codeTranslations.set(e.cca3, e.name?.common);

        return {
          alpha3Code: e.cca3,
          name: e.name?.common || "Unknown",
          nativename:
            Object.values(e.name?.nativeName || {})[0]?.common || "Unknown",
          region: e.region,
          subregion: e.subregion,
          capital: Array.isArray(e.capital) ? e.capital[0] : e.capital,
          tld: e.tld,
          currencies: currencyNames,
          languages: languageNames,
          population: e.population?.toLocaleString("en-US"),
          flag: e.flags?.png,
          borders: e.borders,
          svgFlag: e.flags?.svg,
        };
      });

      setCountryCodes(codeTranslations);
      setBlock(countries);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
      setBlock([]);
    }
  };

  useEffect(() => {
    initialData();
  }, []);

  const query = dynamicSearch;
  const filterCountries = block.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  );

  return selectedCountryDetails !== null ? (
    <div>
      <header id="header">Where in the world?</header>
      <CountryDetails
        selectedCountryDetails={selectedCountryDetails}
        setSelectedCountryDetails={setSelectedCountryDetails}
        setBlock={setBlock}
        countryCodes={countryCodes}
      />
    </div>
  ) : (
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
};

export default GeographyApp;