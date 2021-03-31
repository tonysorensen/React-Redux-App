
import axios from "axios";

export const FETCH_TEAM_START = "FETCH_TEAM_START";
export const FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS";
export const FETCH_TEAM_FAIL = "FETCH_TEAM_FAIL";

export const getTeam = () => (dispatch) => {
  dispatch({ type: FETCH_TEAM_START });
  setTimeout(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => dispatch({ type: FETCH_TEAM_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: FETCH_TEAM_FAIL, payload: err }));
  }, 2000);
};
