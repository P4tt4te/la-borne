import { apiKey } from "./constants";

export const getFilms = (type) => {
  const page = "1";
  const options = { method: "GET" };

  // type : popular | top_rated
  fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=fr-FR&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
