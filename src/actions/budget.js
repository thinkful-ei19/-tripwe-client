import { API_BASE_URL } from '../config';

export const SHOW_BUDGETS = 'SHOW_BUDGETS'
export const showBudgets = () => ({
    type: SHOW_BUDGETS
});

export const HIDE_BUDGETS = 'HIDE_BUDGETS';
export const hideBudgets = () => ({
    type: HIDE_BUDGETS
});

export const SHOW_BUDGETS_FORM = 'SHOW_BUDGETS_FORM';
export const showBudgetsForm = () => ({
    type: SHOW_BUDGETS_FORM
});

export const SHOW_NEW_BUDGET_FORM = 'SHOW_NEW_BUDGET_FORM'
export const showNewBudgetForm = () => ({
    type: SHOW_NEW_BUDGET_FORM
});

export const SHOW_EXPENCES_FORM = 'SHOW_EXPENCES_FORM'
export const showExpencesForm = () => ({
    type: SHOW_EXPENCES_FORM
});

export const ADD_BUDGET_SUCCESS = 'ADD_BUDGET_SUCCESS'
export const addBudgetSuccess= newBudget => ({
    type: ADD_BUDGET_SUCCESS,
    newBudget
});

export const ADD_BUDGET_ERROR = 'ADD_BUDGET_ERROR'
export const addBudgetError= error => ({
    type: ADD_BUDGET_ERROR,
    error
});

export const ADD_BUDGET_REQUEST = 'ADD_BUDGET_REQUEST'
export const addBudgetRequest= () => ({
    type: ADD_BUDGET_REQUEST
});


export const addBudget = newBudget => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/trips/${newBudget.id}/transactions`, {
      method: 'POST',
      body: JSON.stringify(newBudget),
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
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
      .then(json => { dispatch(addBudgetSuccess(json))})
      .catch(err => {
        dispatch(addBudgetError(err));
      })
};
