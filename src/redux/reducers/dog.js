import { REQUEST_API, GET_DOG, FAILED_REQUEST, REMOVE } from "../actions/actionTypes";

const INITIAL_STATE = {
  isLoading: false,
  urls: [],
};

const dog = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      }
    case GET_DOG:
      return {
        ...state,
        urls: [...state.urls, action.payload],
        isLoading: false,
      }
    case FAILED_REQUEST:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case REMOVE:
      return {
        ...state,
        urls: state.urls.filter((src) => src !== action.src)
      }
    default:
      return state;
  }
}

export default dog;
