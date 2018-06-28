import { API_BASE_URL } from "../config";

export const UPDATE_ACCOMMODATION_REQUEST = "UPDATE_ACCOMMODATION_REQUEST";
export const updateAccommodationRequest = () => ({
  type: UPDATE_ACCOMMODATION_REQUEST
});

export const UPDATE_ACCOMMODATION_SUCCESS = "UPDATE_ACCOMMODATION_SUCCESS";
export const updateAccommodationSuccess = newAccommodation => ({
  type: UPDATE_ACCOMMODATION_SUCCESS,
  newAccommodation
});

export const UPDATE_ACCOMMODATION_ERROR = "UPDATE_ACCOMMODATION_ERROR";
export const updateAccommodationError = error => ({
  type: UPDATE_ACCOMMODATION_ERROR,
  error
});

export const updateAccommodation = (newAccom, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/accommodations/${id} `, {
    method: "PUT",
    body: JSON.stringify(newAccom),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has("content-type") &&
          res.headers.get("content-type").startsWith("application/json")
        ) {
          return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return res.json();
    })
    .then(json => {
      console.log(json, "see json");
      dispatch(updateAccommodationSuccess(json));
    })
    .catch(err => {
      dispatch(updateAccommodationError(err));
    });
};
