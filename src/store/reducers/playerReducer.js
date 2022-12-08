import {
  ADD_FILM_HISTORY,
  SET_FILM_ACTIVE,
} from "../constants/playerConstants";

/* Source of truth */
const playerState = {
  filmHistoric: [],
};

const reducer = (state = playerState, action = {}) => {
  switch (action.type) {
    case ADD_FILM_HISTORY:
      const history = [...state.filmHistoric];
      history.push(action.payload);

      console.log(history);

      return {
        ...state,
        filmHistoric: history,
      };
    default:
      return state;
  }
};

export default reducer;
