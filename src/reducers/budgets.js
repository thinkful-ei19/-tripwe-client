import { SHOW_BUDGETS, HIDE_BUDGETS } from "../actions/budget";

const initialState = {
  showBudgets: false
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
  }
  return state;
}
