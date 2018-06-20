import { SHOW_DETAILS } from "../actions/accommodations";

const initialState = {
  showAccDetails: null,
  isAccDetailsHidden: true
};

export default function reducer(state = initialState, action) {
  if (action.type === SHOW_DETAILS) {
    return Object.assign({}, state, {
      showAccDetails: action.id,
      isAccDetailsHidden: state.isAccDetailsHidden
        ? false
        : action.id === state.showAccDetails
    });
  }
  return state;
}
