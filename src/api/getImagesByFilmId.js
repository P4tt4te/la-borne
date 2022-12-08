import { apiKey } from "./constants";

export const getImagesByFilmId = (filmId) => {
  const options = { method: "GET" };

  return fetch(
    `https://api.themoviedb.org/3/movie/${filmId}/images?api_key=${apiKey}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};
