import {
  EDIT_TRIP_DESCRIPTION,
  EDIT_TRIP_SUCCESS,
  EDIT_TRIP_ERROR,
  EDIT_NAME_REQUEST,
  EDIT_TRIP_DESTINATION
} from "../actions/edit-trip";

const initialState = {
  editDescriptionInput: false,
  editTripName: false,
  editTripDestination: false,
  loading: false,
};

export default function reducer(state = initialState, action) {
  if (action.type === EDIT_TRIP_DESCRIPTION) {
    return Object.assign({}, state, {
      editDescriptionInput: true
    });
  } else if (action.type === EDIT_TRIP_SUCCESS) {
      return Object.assign({}, state, {
        editDescriptionInput: false,
        editTripName: false,
        editTripDestination: false,
        loading: false
      });
  } else if (action.type === EDIT_TRIP_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
  } else if (action.type === EDIT_NAME_REQUEST) {
      return Object.assign({}, state, {
        editTripName: true
      });
  } else if (action.type === EDIT_TRIP_DESTINATION) {
      return Object.assign({}, state, {
        editTripDestination: true
      });
  }
  return state;
}
