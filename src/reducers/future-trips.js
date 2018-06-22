import {
  SHOW_FUTURE_TRIPS,
  SHOW_PAST_TRIPS,
  RENDER_TRIP_SUCCESS
} from "../actions/trips-list";

const initialState = {
  futureTripsList: false,
  pastTripsList: false
};

export default function reducer(state = initialState, action) {
  if (action.type === SHOW_FUTURE_TRIPS) {
    return Object.assign({}, state, {
      futureTripsList: true
    });
  } else if (action.type === SHOW_PAST_TRIPS) {
    return Object.assign({}, state, {
      pastTripsList: true
    })
  } else if (action.type === RENDER_TRIP_SUCCESS) {
    return Object.assign({}, state, {
      futureTripsList: false,
      pastTripsList: false
    })
  }
  return state;
}
