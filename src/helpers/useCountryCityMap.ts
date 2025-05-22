import { useEffect, useMemo, useState } from 'react';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(enLocale);

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
      const isoCode = countries.getAlpha2Code(countryName, 'en');
      if (isoCode) {
        map[isoCode] = cities;
      }
    }
    return map;
  }, [countryMap]);

  return codeToCitiesMap;
};

export default useCountryCityMap;
