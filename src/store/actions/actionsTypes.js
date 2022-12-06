import {
  SET_FILM_ACTIVE,
  ADD_FILM_HISTORY,
} from "../constants/playerConstants";

/* Dispatch functions */
export const setFilmActive = (payload) => {
  return {
    type: SET_FILM_ACTIVE,
    payload: payload,
  };
};

export const addFilmHistory = (payload) => {
  return {
    type: ADD_FILM_HISTORY,
    payload: payload,
  };
};
