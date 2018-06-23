import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const CREATE_NEW_PLAN_REQUEST = "CREATE_NEW_PLAN_REQUEST";
export const createNewPlanRequest = () => ({
  type: CREATE_NEW_PLAN_REQUEST
});

export const CREATE_NEW_PLAN_SUCCESS = "CREATE_NEW_PLAN_SUCCESS";
export const createNewPlanSuccess = data => ({
  type: CREATE_NEW_PLAN_SUCCESS,
  data
});

export const CREATE_NEW_PLAN_ERROR = "CREATE_NEW_PLAN_ERROR";
export const createNewPlanError = error => ({
  type: CREATE_NEW_PLAN_ERROR,
  error
});

export const SHOW_PLAN_FORM = "SHOW_PLAN_FORM";
export const showPlanForm = data => ({
  type: SHOW_PLAN_FORM,
  data: data
});

export const SHOW_NEW_PLAN_FORM = "SHOW_NEW_PLAN_FORM";
export const showNewPlanForm = () => ({
  type: SHOW_NEW_PLAN_FORM
});

export const ADD_PLAN = "ADD_PLAN";
export const addPlan = data => ({
  type: ADD_PLAN,
  data
});

export const DELETE_PLAN = 'DELETE_PLAN';
export const deletePlan = (id) => ({
    type: DELETE_PLAN,
    id
});

export const createNewPlan = newPlan => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/trips/${newPlan.tripId}/plans`, {
    method: "POST",
    body: JSON.stringify(newPlan),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      newPlan.id = res;
      dispatch(addPlan(newPlan));
      dispatch(showPlanForm(false));
    })
    .catch(err => {
      // dispatch(createPlanError(err));
    });
};

export const deletePlansById = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/plans/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return dispatch(deletePlan(id));
  });
};
