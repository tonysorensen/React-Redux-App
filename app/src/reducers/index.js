import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
  } from "../actions";

const initialState = {
    holidays: [],
    error: "",
    isFetching: false,
}
 const reducer = (state = initialState, action) => {
    switch (action.type) {

    case FETCH_DATA_START:

        return { ...state, isFetching: true }
    case FETCH_DATA_SUCCESS:
        return {...state, holidays: action.payload, isFetching: false}
    case FETCH_DATA_FAIL:
        return {...state, error:action.payload}

    default:
        return state
    }
}


export default reducer