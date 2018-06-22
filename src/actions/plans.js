import { API_BASE_URL } from "../config";
import moment from "moment";
import { normalizeResponseErrors } from "./utils";

export const CREATE_PLAN_REQUEST = "CREATE_PLAN_REQUEST";
export const createPlanRequest = () => ({
  type: CREATE_PLAN_REQUEST
});

export const CREATE_PLAN_SUCCESS = "CREATE_PLAN_SUCCESS";
export const createPlanSuccess = plan => ({
  type: CREATE_PLAN_SUCCESS,
  plan
});

export const CREATE_PLAN_ERROR = "CREATE_PLAN_ERROR";
export const createPlanError = error => ({
  type: CREATE_PLAN_ERROR,
  error
});

export const SET_DATE = "SET_DATE";
export const setDate = date => ({
  type: SET_DATE,
  date
});

export const createPlan = (authToken, date, description, id) => dispatch => {
  console.log("Dispatching");
  dispatch(createPlanRequest());
  const newPlan = {
    date: moment(String(description.date + " " + description.time)).format(),
    trip_id: id,
    description
  };

  fetch(`${API_BASE_URL}/trips/${id}/plans`, {
    method: "POST",
    body: JSON.stringify(newPlan),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    // .then(res => dispatch(addPlan())
    .catch(err => {
      dispatch(createPlanError(err));
    });
};
