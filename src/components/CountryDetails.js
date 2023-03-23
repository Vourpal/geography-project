import React from "react";
import { obtainCodeCountry } from "./api";
import "./Stylesheets/CountryDetails.css";
const CountryDetails = (props) => {
  const borderCountry = (e) => {
    obtainCodeCountry(e).then((res) => {
      console.log("hitler", res.data);
      props.setSelectedCountryDetails({
        alpha3Code: res.data.alpha3Code,
        name: res.data.name,
        nativename: res.data.nativeName,
        region: res.data.region,
        subregion: res.data.subregion,
        capital: res.data.capital,
        tld: res.data.topLevelDomain,
        currencies: res.data.currencies.map((e) => e.name),
        languages: res.data.languages.map((h) => h.name),
        population: res.data.population.toLocaleString("en-US"),
        svgFlag: res.data.flags.svg,
        borders: res.data.borders,
      });
    });
  };
  console.log("this is what you are getting back", props.codeTranslations);
  return (
    <div id="origin-wrapper">
      <div id="button-wrapper">
        <svg
          id="arrow-image"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>arrow-left2</title>
          <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
        </svg>
        <button
          id="back-button"
          onClick={() => {
            window.location.reload(false);
          }}
        >
          Back
        </button>
      </div>
      <main id="main-wrapper">
        <img
          id="flag-details"
          src={props.selectedCountryDetails.svgFlag}
          alt="focused country map"
        ></img>
        <div id="information-wrapper">
          <p>
            {" "}
            {props.selectedCountryDetails && (
              <span id="title-name">{props.selectedCountryDetails.name}</span>
            )}
          </p>
          <ul id="list-wrapper">
            <li className="title-format">
              Native Name:{" "}
              {props.selectedCountryDetails && (
                <span className="props-format">
                  {props.selectedCountryDetails.nativename}
                </span>
              )}
            </li>
            <li className="title-format">
              Population:{" "}
              {props.selectedCountryDetails && (
                <span className="props-format">
                  {props.selectedCountryDetails.population}
                </span>
              )}{" "}
            </li>
            <li className="title-format">
              Region:{" "}
              {props.selectedCountryDetails && (
                <span className="props-format">
                  {props.selectedCountryDetails.region}
                </span>
              )}
            </li>
            <li className="title-format">
              Sub Region:{" "}
              {props.selectedCountryDetails && (
                <span className="props-format">
                  {props.selectedCountryDetails.subregion}
                </span>
              )}{" "}
            </li>
            <li className="title-format">
              Capital:{" "}
              {props.selectedCountryDetails && (
                <span className="props-format">
                  {props.selectedCountryDetails.capital}
                </span>
              )}{" "}
            </li>
            <li className="title-format">
              Top Level Domain:{" "}
              {props.selectedCountryDetails && (
                <span className="props-format">
                  {props.selectedCountryDetails.tld}
                </span>
              )}{" "}
            </li>
            <li className="title-format">
              Languages:{" "}
              {props.selectedCountryDetails && (
                <span className="props-format">
                  {props.selectedCountryDetails.languages.join(", ")}
                </span>
              )}
            </li>
            <li className="title-format">
              Currencies:{" "}
              {props.selectedCountryDetails.currencies ? (
                <span className="props-format">
                  {props.selectedCountryDetails.currencies.join(", ")}
                </span>
              ) : (
                <span className="props-format">None</span>
              )}{" "}
            </li>
          </ul>
          <div id="button-wrapper2">
            <span className="format-title">Border Countries:{" "}</span>
            {props.selectedCountryDetails.borders ? (
              props.selectedCountryDetails.borders.map((e) => (
                <button
                  key={`${e}-button`}
                  onClick={() => {
                    borderCountry(e);
                  }}
                  className="border-buttons"
                >
                  {props.countryCodes.get(e)}
                </button>
              ))
            ) : (
              <span className="format-title">None</span>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CountryDetails;

// when you make the back button make sure to set setcountryDetails to null again

// const codeInfo = res.data.map((e) => {
//   return{
//     name: e.name,
//     nativename: e.nativeName,
//     region: e.region,
//     subregion: e.subregion,
//     capital: e.capital,
//     tld: e.topLevelDomain,
//     currencies: e.currencies,
//     languages: e.languages.map((h) => (h.name)),
//     population: e.population.toLocaleString("en-US"),
//     flag: e.flags.png,
//     borders: e.borders,
//     newdata: "code bullshit seems to be an object now instead of an array lol"
//   }
// })
