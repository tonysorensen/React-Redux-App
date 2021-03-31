import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  setTimeout(() => {
    axios
      .get(
       'https://date.nager.at/api/v2/publicholidays/2021/US'
      )
      .then((res) => {
          console.log ('res from fetchData',res)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
      }
      )
      .catch((err) => {
        dispatch({
          type: FETCH_DATA_FAIL,
          payload: err,
        });
      });
  }, 3000);
};