import { ajax } from "../tools/ajax";

export const getCountries = async () => {
    const optionsRequest = {
        method: "GET",
        url: "https://restcountries.com/v3.1/all"
    };
    const response = await ajax(optionsRequest);

  // Ordenar los países por nombre alfabéticamente
  const sortedCountries = response.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return sortedCountries;
};