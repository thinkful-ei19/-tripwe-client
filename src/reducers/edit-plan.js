import {
  UPDATE_PLAN_REQUEST,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PLAN_ERROR
} from "../actions/edit-plan";

const initialState = {
  editPlanForm: false,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_PLAN_REQUEST) {
    return Object.assign({}, state, {
      editPlanForm: true,
      loading: false
    });
  } else if (action.type === UPDATE_PLAN_SUCCESS) {
    return Object.assign({}, state, {
      editPlanForm: false,
      loading: false
    });
  } else if (action.type === UPDATE_PLAN_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  return state;
}
