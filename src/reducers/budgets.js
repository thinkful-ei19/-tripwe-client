import { SHOW_BUDGETS, HIDE_BUDGETS, SHOW_BUDGETS_FORM } from "../actions/budget";

const initialState = {
  showBudgets: false,
  showBudgetsForm: false
};

export default function reducer(state = initialState, action) {
  if (action.type === SHOW_BUDGETS) {
    return Object.assign({}, state, {
      showBudgets: true
    });
  } else if (action.type === HIDE_BUDGETS) {
    return Object.assign({}, state, {
      showBudgets: false
    });
  } else if (action.type === SHOW_BUDGETS_FORM) {
    return Object.assign({}, state, {
      showBudgetsForm: true
    });
  }
  return state;
}
