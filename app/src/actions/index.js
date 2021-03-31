
import axios from "axios";

export const FETCH_TEAM_START = "FETCH_Team_START";
export const FETCH_TEAM_SUCCESS = "FETCH_Team_SUCCESS";
export const FETCH_TEAM_FAIL = "FETCH_Team_FAIL";

export const getTeam = () => (dispatch) => {
  dispatch({ type: FETCH_TEAM_START });
  setTimeout(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => dispatch({ type: FETCH_TEAM_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: FETCH_TEAM_FAIL, payload: err }));
  }, 2000);
};
