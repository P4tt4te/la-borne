import { apiKey } from "./constants";
import axios from 'axios';

export const getFilms = (type, page) => {
  // const page = "1";
  // const options = { method: "GET" };

  // type : popular | top_rated
  return axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=fr-FR&page=${page}`,
  )
    // .then((response) => console.log(response))
    .then((response) => {
      // console.log(response.data);
      return response.data
    })
    .catch((err) => console.error(err));
};
