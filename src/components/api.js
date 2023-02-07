import axios from "axios"


export let obtainSearchInformation = async (name) => {
  return await axios.get(
   ` https://restcountries.com/v3.1/name/${name}`
  )
}

export let obtainContinent = async (region) => {
  return await axios.get(
    `https://restcountries.com/v2/region/${region}`
  )
}

export let obtainAllCountries = async () => {
  return await axios.get(
    "https://restcountries.com/v2/all"
  )
}