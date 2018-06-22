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

export const createNewPlan = newPlan => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  //   console.log(newPlan);
  //   fetch(`${API_BASE_URL}/trips/${newPlan.tripId}/plans `, {
  //     method: "POST",
  //     body: JSON.stringify(newPlan),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${authToken}`
  //     }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         if (
  //           res.headers.has("content-type") &&
  //           res.headers.get("content-type").startsWith("application/json")
  //         ) {
  //           return res.json().then(err => Promise.reject(err));
  //         }
  //         return Promise.reject({
  //           code: res.status,
  //           message: res.statusText
  //         });
  //       }
  //       return res.json();
  //     })
  //     .then(json => dispatch(createNewPlanSuccess(json)))
  //     .catch(err => {
  //       dispatch(createNewPlanError(err));
  //     });
  // };

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
