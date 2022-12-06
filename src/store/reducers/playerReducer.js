import {
  ADD_FILM_HISTORY,
  SET_FILM_ACTIVE,
} from "../constants/playerConstants";

/* Source of truth */
const playerState = {
  filmActive: [],
  filmHistoric: [],
};

const reducer = (state = playerState, action = {}) => {
  switch (action.type) {
    case SET_FILM_ACTIVE:
      let newFilm = action.payload;

      return {
        ...state,
        filmActive: [newFilm],
      };
    case ADD_FILM_HISTORY:
      const history = [...filmHistoric];
      history.push(action.payload);

      return {
        ...state,
        filmHistoric: history,
      };
    default:
      return state;
  }
};

export default reducer;
