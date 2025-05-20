import { useEffect, useState } from 'react';

const useCountryList = () => {
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
      .then((response) => response.json())
      .then((data) => {
        const countryList = Object.keys(data).sort((a, b) => a.localeCompare(b));
        setCountries(countryList);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return countries;
};

export default useCountryList;
