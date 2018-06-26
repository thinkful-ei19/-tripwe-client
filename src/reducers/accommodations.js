import {
  SHOW_DETAILS,
  SHOW_ACCOMMODATIONS_FORM,
  SHOW_ADD_USER_MENU,
  SHOW_NEW_ACCOMMODATIONS_FORM,
  ADD_ACCOMMODATION_REQUEST,
  ADD_ACCOMMODATION_SUCCESS,
  ADD_ACCOMMODATION_ERROR,
  ADD_USER_TO_ACCOMMODATION_REQUEST,
  ADD_USER_TO_ACCOMMODATION_SUCCESS,
  ADD_USER_TO_ACCOMMODATION_ERROR
} from "../actions/accommodations";

const initialState = {
  showAccDetails: null,
  showAccUsers: null,
  isAccDetailsHidden: true,
  isAccFormHidden: false,
  isUserAddToAccMenu: false,
  showNewAccommodationsForm: false,
  loading: false,
  error: null,
  accommodations: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SHOW_DETAILS) {
    return Object.assign({}, state, {
      showAccDetails: action.id,
      isAccDetailsHidden: state.isAccDetailsHidden
        ? false
        : action.id === state.showAccDetails
    });
  } else if (action.type === SHOW_ACCOMMODATIONS_FORM) {
    return Object.assign({}, state, {
      isAccFormHidden: action.data
    });
  } else if (action.type === SHOW_NEW_ACCOMMODATIONS_FORM) {
    return Object.assign({}, state, {
      showNewAccommodationsForm: true
    });
  } else if (action.type === ADD_ACCOMMODATION_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === ADD_ACCOMMODATION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      isAccFormHidden: false,
      error: null
    });
  } else if (action.type === ADD_ACCOMMODATION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === ADD_USER_TO_ACCOMMODATION_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === ADD_USER_TO_ACCOMMODATION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      isUserAddToAccFormHidden: false,
      error: null
    });
  } else if (action.type === ADD_USER_TO_ACCOMMODATION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === SHOW_ADD_USER_MENU) {
    return Object.assign({}, state, {
      showAccUsers: action.data
    });
  }

  return state;
}
