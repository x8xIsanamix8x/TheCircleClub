import { useEffect, useState } from 'react';

const useCountryCityMap = () => {
  const [cityMap, setCityMap] = useState<{ [country: string]: string[] }>({});

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
      .then((res) => res.json())
      .then((data) => setCityMap(data))
      .catch((err) => console.error('Error loading city map:', err));
  }, []);

  return cityMap;
};

export default useCountryCityMap;