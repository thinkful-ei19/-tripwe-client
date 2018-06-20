import { SHOW_BUDGETS } from "../actions/budget";

const initialState = {
  showBudgets: false
};

export default function reducer(state = initialState, action) {
  if (action.type === SHOW_BUDGETS) {
    return Object.assign({}, state, {
      showBudgets: true
    });
  }
  return state;
}
