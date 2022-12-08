import { apiKey } from "./constants";

export const getFilmByName = (name) => {
  const options = { method: "GET" };

  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${name}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};
