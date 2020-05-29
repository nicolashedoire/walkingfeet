import { countries } from '../config/data';

const getCountries = () => {
  let countriesArray: any = [];
  for (let [key, value] of Object.entries(countries)) {
    countriesArray = [
      ...countriesArray,
      {
        key,
        value,
      },
    ];
  }
  return countriesArray;
};

export default getCountries;
