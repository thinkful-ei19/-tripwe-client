import { API_BASE_URL } from "../config";

export const SHOW_DETAILS = "SHOW_DETAILS";
export const showDetails = id => ({
  type: SHOW_DETAILS,
  id
});

export const SHOW_ACCOMMODATIONS_FORM = "SHOW_ACCOMMODATIONS_FORM";
export const showAccommodationsForm = data => ({
  type: SHOW_ACCOMMODATIONS_FORM,
  data: data
});

export const SHOW_NEW_ACCOMMODATIONS_FORM = "SHOW_NEW_ACCOMMODATIONS_FORM";
export const showNewAccommodationsForm = () => ({
  type: SHOW_NEW_ACCOMMODATIONS_FORM
});

export const ADD_ACCOMMODATION_REQUEST = "ADD_ACCOMMODATION_REQUEST";
export const AccommodationRequest = () => ({
  type: ADD_ACCOMMODATION_REQUEST
});

export const ADD_ACCOMMODATION_SUCCESS = "ADD_ACCOMMODATION_SUCCESS";
export const addAccommodationSuccess = newAccommodation => ({
  type: ADD_ACCOMMODATION_SUCCESS,
  newAccommodation
});

export const ADD_ACCOMMODATION_ERROR = "ADD_ACCOMMODATION_ERROR";
export const addAccommodationError = error => ({
  type: ADD_ACCOMMODATION_ERROR,
  error
});

export const addAccommodation = newAccommodation => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(newAccommodation);
  fetch(`${API_BASE_URL}/trips/${newAccommodation.id}/accommodations `, {
    method: "POST",
    body: JSON.stringify(newAccommodation),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      //console.log(res, "resres");
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
      //console.log(json, "see json");
      dispatch(addAccommodationSuccess(json));
    })
    .catch(err => {
      dispatch(addAccommodationError(err));
      dispatch(showAccommodationsForm(false));
    });
};
