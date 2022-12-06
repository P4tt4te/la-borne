import { apiKey } from "./constants";

export const getFilmById = (filmId) => {
    const options = { method: "GET" };
  
    fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}&language=fr-FR`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  