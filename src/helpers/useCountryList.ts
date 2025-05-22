import { useEffect, useState } from 'react';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(enLocale);

interface CountryItem {
  name: string;
  code: string;
}

const useCountryList = (): CountryItem[] => {
  const [countryList, setCountryList] = useState<CountryItem[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
      .then((res) => res.json())
      .then((data) => {
        const names = Object.keys(data);
        const result: CountryItem[] = names
          .map((name) => {
            const code = countries.getAlpha2Code(name, 'en');
            if (code) return { name, code };
            return null;
          })
          .filter((item): item is CountryItem => item !== null)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountryList(result);
      })
      .catch((err) => console.error('Error loading countries:', err));
  }, []);

  return countryList;
};

export default useCountryList;
