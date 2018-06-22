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

export const SET_NEW_TRIP_ID = "SET_NEW_TRIP_ID";
export const setNewTripId = newTripId => ({
  type: SET_NEW_TRIP_ID,
  newTripId
});

export const createNewTrip = data => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // dispatch(createNewTripRequest());
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
      return normalizeResponseErrors(res);
    })
    .then(res => res.json())
    .then(newTripId => {
      dispatch(setNewTripId(newTripId));
    })
    .then(() => {
      dispatch(nextStep());
    })
    .catch(err => console.error(err));
};

export const createNewGroup = data => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const trip_id = getState().createNewTrip.newTripId;

  fetch(`${API_BASE_URL}/trips/${trip_id}/group`, {
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
      // return normalizeResponseErrors(res);
    })
    // .then(res => res.json())
    // .then(res => {
    //     console.log(res);
    // })
    .then(() => {
      dispatch(nextStep());
    })
    .catch(err => console.error(err));
};

export const createNewFlight = data => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const trip_id = getState().createNewTrip.newTripId;
  // dispatch(createNewTripRequest());
  // console.log(data);
  fetch(`${API_BASE_URL}/trips/${trip_id}/flights`, {
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
      console.log(res);
      // return normalizeResponseErrors(res);
    })
    // .then(res => res.json())
    // .then(res => {
    //     console.log(res);
    // })
    .then(() => {
      dispatch(nextStep());
    })
    .catch(err => console.error(err));
};

export const createNewAccommodation = data => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const trip_id = getState().createNewTrip.newTripId;
  // dispatch(createNewTripRequest());
  fetch(`${API_BASE_URL}/trips/${trip_id}/accommodations`, {
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
      console.log(res);
      // return normalizeResponseErrors(res);
    })
    // .then(res => res.json())
    // .then(newTripId => {
    //     dispatch(setNewTripId(newTripId));
    // })
    .then(() => {
      dispatch(nextStep());
    })
    .catch(err => console.error(err));
};

export const createNewBudget = data => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const trip_id = getState().createNewTrip.newTripId;
  // dispatch(createNewTripRequest());
  fetch(`${API_BASE_URL}/trips/${trip_id}/budgets`, {
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
      console.log(res);
      // return normalizeResponseErrors(res);
    })
    // .then(res => res.json())
    // .then(newTripId => {
    //     dispatch(setNewTripId(newTripId));
    // })
    .then(() => {
      dispatch(completeNewForm());
    })
    .catch(err => console.error(err));
};

export const NEXT_STEP = "NEXT_STEP";
export const nextStep = () => ({
  type: NEXT_STEP
});

export const COMPLETE_NEW_FORM = "COMPLETE_NEW_FORM";
export const completeNewForm = () => ({
  type: COMPLETE_NEW_FORM
});
