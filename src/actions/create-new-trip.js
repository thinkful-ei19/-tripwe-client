import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const CREATE_NEW_TRIP_INIT = "CREATE_NEW_TRIP_INIT";
export const createNewTripInit = () => ({
  type: CREATE_NEW_TRIP_INIT
});

export const CANCEL_NEW_TRIP_INIT = "CANCEL_NEW_TRIP_INIT";
export const cancelNewTripInit = () => ({
  type: CANCEL_NEW_TRIP_INIT
});

export const CREATE_NEW_TRIP_REQUEST = "CREATE_NEW_TRIP_REQUEST";
export const createNewTripRequest = () => ({
  type: CREATE_NEW_TRIP_REQUEST
});

export const CREATE_NEW_TRIP_SUCCESS = "CREATE_NEW_TRIP_SUCCESS";
export const createNewTripSuccess = data => ({
  type: CREATE_NEW_TRIP_SUCCESS,
  data
});

export const CREATE_NEW_TRIP_ERROR = "CREATE_NEW_TRIP_ERROR";
export const createNewTripError = error => ({
  type: CREATE_NEW_TRIP_ERROR,
  error
});

export const createNewTrip = data => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(createNewTripRequest());
  console.log(data);
  fetch(`${API_BASE_URL}/trips`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err));
};
