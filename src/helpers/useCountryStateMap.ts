import { useEffect, useMemo, useState } from 'react';

type CountryState = {
  code2: string;
  name: string;
  states: { code: string; name: string }[];
};

const useCountryStateMap = () => {
  const [countryList, setCountryList] = useState<CountryState[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json')
      .then((res) => res.json())
      .then((data) => setCountryList(data))
      .catch((err) => console.error('Error loading state map:', err));
  }, []);

  const codeToStatesMap = useMemo(() => {
    const map: { [code2: string]: string[] } = {};
    for (const country of countryList) {
      map[country.code2] = country.states.map((s) => s.name);
    }
    return map;
  }, [countryList]);

  return codeToStatesMap;
};

export default useCountryStateMap;
