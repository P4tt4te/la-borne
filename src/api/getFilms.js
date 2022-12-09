import { apiKey } from "./constants";

export const getFilms = (type, page) => {
  // const page = "1";
  const options = { method: "GET" };

  return fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=fr-FR&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};
