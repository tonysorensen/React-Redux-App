import {
  FETCH_TEAM_START,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAIL,
} from "../actions";

const initialState = {
  team: [],
  error: "",
  isFetching: false,
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_TEAM_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_TEAM_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        team: action.payload.data,
        isFetching: false,
        error: "",
      };
    case FETCH_TEAM_FAIL:
      return {
        ...state,
        error: action.payload.message,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default reducer;
