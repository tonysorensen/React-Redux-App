import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = (searchTerm) => (dispatch) => {
  console.log("firing", searchTerm);
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${searchTerm}`
    )
    .then((res) => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: err,
      });
    });
};
