import axios from "axios";

// ✅ Search by country name (already using v3.1 correctly)
export let obtainSearchInformation = async (name) => {
  return await axios.get(`https://restcountries.com/v3.1/name/${name}`);
};

// ❌ Region endpoint: switch from v2 to v3.1
export let obtainContinent = async (region) => {
  return await axios.get(`https://restcountries.com/v3.1/region/${region}`);
};

// ❌ All countries: switch from v2 to v3.1
export let obtainAllCountries = async () => {
  return await axios.get("https://restcountries.com/v3.1/all?fields=name,cca2,region,flags");
};

// ❌ Country by code: switch from v2 to v3.1
export let obtainCodeCountry = async (codeb) => {
  return await axios.get(`https://restcountries.com/v3.1/alpha/${codeb}`);
};