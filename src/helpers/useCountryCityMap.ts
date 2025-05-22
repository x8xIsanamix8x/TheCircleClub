import { useEffect, useMemo, useState } from 'react';

const useCountryCityMap = () => {
  const [countryMap, setCountryMap] = useState<{ [countryName: string]: string[] }>({});

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
      .then((res) => res.json())
      .then((data) => setCountryMap(data))
      .catch((err) => console.error('Error loading city map:', err));
  }, []);

  const codeToCitiesMap = useMemo(() => {
    const map: { [code: string]: string[] } = {};
    for (const [countryName, cities] of Object.entries(countryMap)) {
      const code = countryName.slice(0, 3).toUpperCase(); // Simple código de 3 letras
      map[code] = cities;
    }
    return map;
  }, [countryMap]);

  return codeToCitiesMap;
};

export default useCountryCityMap;
