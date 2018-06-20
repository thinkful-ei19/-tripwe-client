import {
  SHOW_BUDGETS,
  HIDE_BUDGETS,
  SHOW_BUDGETS_FORM,
  SHOW_NEW_BUDGET_FORM,
  ADD_BUDGET_SUCCESS,
  ADD_BUDGET_REQUEST,
  ADD_BUDGET_ERROR
} from "../actions/budget";

const initialState = {
  showBudgets: false,
  showBudgetsForm: false,
  showNewBudgetForm: false,
  loading: false,
  error: null,
  budget: null
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
  } else if (action.type ===  SHOW_NEW_BUDGET_FORM) {
    return Object.assign({}, state, {
      showNewBudgetForm: true
    });
  } else if (action.type === ADD_BUDGET_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
  } else if (action.type === ADD_BUDGET_SUCCESS) {
    console.log(action.newBudget[0], "ACTION")
      return Object.assign({}, state, {
          loading: false,
          showNewBudgetForm: false,
          error: null
      });
  } else if (action.type === ADD_BUDGET_ERROR) {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
  }
  return state;
}
