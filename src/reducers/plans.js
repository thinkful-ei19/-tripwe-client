import {
  CREATE_NEW_PLAN_REQUEST,
  CREATE_NEW_PLAN_SUCCESS,
  CREATE_NEW_PLAN_ERROR,
  SHOW_PLAN_FORM,
  SHOW_NEW_PLAN_FORM
} from "../actions/plans";

const initialState = {
  isPlanFormHidden: false,
  showNewPlansForm: false,
  loading: false,
  error: null,
  accommodations: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SHOW_PLAN_FORM) {
    return Object.assign({}, state, {
      isPlanFormHidden: action.data
    });
  } else if (action.type === SHOW_NEW_PLAN_FORM) {
    return Object.assign({}, state, {
      showNewPlanForm: true
    });
  } else if (action.type === CREATE_NEW_PLAN_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === CREATE_NEW_PLAN_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      showNewPlansForm: false,
      error: null
    });
  } else if (action.type === CREATE_NEW_PLAN_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
}
