import {
  UPDATE_ACCOMMODATION_REQUEST,
  UPDATE_ACCOMMODATION_SUCCESS,
  UPDATE_ACCOMMODATION_ERROR
} from "../actions/edit-accommodation";

const initialState = {
  editAccommodationForm: false,
  editAccommodationName: false,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_ACCOMMODATION_REQUEST) {
    return Object.assign({}, state, {
      editAccommodationForm: true,
      editAccommodationName: true,
      loading: false
    });
  } else if (action.type === UPDATE_ACCOMMODATION_SUCCESS) {
    return Object.assign({}, state, {
      editAccommodationForm: false,
      editAccommodationName: false,
      loading: false
    });
  } else if (action.type === UPDATE_ACCOMMODATION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  return state;
}
