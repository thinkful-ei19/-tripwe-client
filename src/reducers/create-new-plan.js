import {
  CREATE_NEW_PLAN_REQUEST,
  CREATE_NEW_PLAN_SUCCESS,
  CREATE_NEW_PLAN_ERROR
} from "../actions/create-new-plan";

const initialState = {
  closestTrip: null
};

export default function reducer(state = initialState, action) {
  if (action.type === CREATE_NEW_PLAN_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === CREATE_NEW_PLAN_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      trip: action.data,
      error: null
    });
  } else if (action.type === CREATE_NEW_PLAN_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.error });
  }
  return state;
}
