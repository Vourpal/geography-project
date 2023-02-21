import React from "react";
import { obtainCodeCountry } from "./api";
import "./Stylesheets/CountryDetails.css";
const CountryDetails = (props) => {
  const borderCountry = (e) => {
    obtainCodeCountry(e).then((res) => {
      console.log("hitler", res.data);
      props.setSelectedCountryDetails({
        name: res.data.name,
        nativename: res.data.nativeName,
        region: res.data.region,
        subregion: res.data.subregion,
        capital: res.data.capital,
        tld: res.data.topLevelDomain,
        currencies: res.data.currencies.map((e) => e.name),
        languages: res.data.languages.map((h) => h.name),
        population: res.data.population.toLocaleString("en-US"),
        flag: res.data.flags.png,
        borders: res.data.borders,
      });
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          window.location.reload(false);
        }}
      >
        Back
      </button>
      <main>
        <img
          src={props.selectedCountryDetails.flag}
          alt="focused country map"
        ></img>
        <div>
          <p>
            {" "}
            {props.selectedCountryDetails && (
              <span id="title-name">{props.selectedCountryDetails.name}</span>
            )}
          </p>
          <ul>
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
          <div>
            Border Countries:{" "}
            {props.selectedCountryDetails.borders ? (
              props.selectedCountryDetails.borders.map((e) => (
                <button
                  key={`${e}-button`}
                  onClick={() => {
                    borderCountry(e);
                  }}
                >
                 {e}
                </button>
              ))
            ) : (
              <span>None</span>
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
