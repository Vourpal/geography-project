import axios from "axios"


export let obtainSearchInformation = async (name) => {
  return await axios.get(
   ` https://restcountries.com/v3.1/name/${name}`
  )
}
