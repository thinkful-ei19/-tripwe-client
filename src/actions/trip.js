<<<<<<< HEAD
import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
=======
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
>>>>>>> 1d50fa54f08bfa7d68189be14e83c8c26c64d4a8

export const FETCH_TRIP_DATA_SUCCESS = "FETCH_TRIP_DATA_SUCCESS";
export const fetchTripDataSuccess = data => ({
  type: FETCH_TRIP_DATA_SUCCESS,
  data
});

export const FETCH_TRIP_DATA_ERROR = "FETCH_TRIP_DATA_ERROR";
export const fetchTripDataError = error => ({
  type: FETCH_TRIP_DATA_ERROR,
  error
});

export const fetchTripData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dashboard`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      return dispatch(fetchTripDataSuccess(data));
    })
    .catch(err => {
      dispatch(fetchTripDataError(err));
    });
};
