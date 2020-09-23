import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "../actions";

const initialState = {
  jobs: [],
  error: "",
  isFetching: false,

  //   {
  //     type: "",
  //     company: "",
  //     location: "",
  //     title: "",
  //     description: "",
  //     apply: "",
  //     posted: "",
  //     companyUrl: "",
  //     postingUrl: "",
  //     companyLogo: "",
  //     error: "",
  //     isFetching: false,
  //   },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case FETCH_DATA_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        jobs: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
export default reducer;
