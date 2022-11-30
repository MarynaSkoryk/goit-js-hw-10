const URL = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  const urlCountry = `${URL}/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(urlCountry).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
