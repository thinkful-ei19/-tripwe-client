import { API_BASE_URL } from "../config";

export const UPDATE_PLAN_REQUEST = "UPDATE_PLAN_REQUEST";
export const updatePlanRequest = () => ({
  type: UPDATE_PLAN_REQUEST
});

export const UPDATE_PLAN_SUCCESS = "UPDATE_PLAN_SUCCESS";
export const updatePlanSuccess = newPlan => ({
  type: UPDATE_PLAN_SUCCESS,
  newPlan
});

export const UPDATE_PLAN_ERROR = "UPDATE_PLAN_ERROR";
export const updatePlanError = error => ({
  type: UPDATE_PLAN_ERROR,
  error
});

export const updatePlan = (newPlan, id) => (dispatch, getState) => {
  console.log(newPlan, "new plan");
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/plans/${id} `, {
    method: "PUT",
    body: JSON.stringify(newPlan),
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
      dispatch(updatePlanSuccess(json));
    })
    .catch(err => {
      dispatch(updatePlanError(err));
    });
};
