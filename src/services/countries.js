import axios from "axios";
import endpoints from "./endpoints";


export const getCountries = async () => {
  try {
    const { data } = await axios.get(endpoints.countries);
    return data;
    
  } catch (error) {
    console.log(error);
    return error;
    
  }
}


