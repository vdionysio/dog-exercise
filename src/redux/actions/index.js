import { REQUEST_API, GET_DOG, FAILED_REQUEST, REMOVE } from "./actionTypes";

const requestApi = () => ({
  type: REQUEST_API,
});

const getDog = (url) => ({
  type: GET_DOG,
  payload: url,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const remove = (src) => ({
  type: REMOVE,
  src,
});

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getDog(json.message)),
          (error) => dispatch(failedRequest(error))
        )
      )
  }
}