import {
  ADD_FILM_HISTORY,
} from "../constants/playerConstants";

/* Dispatch functions */

export const addFilmHistory = (payload) => {
  return {
    type: ADD_FILM_HISTORY,
    payload: payload,
  };
};
