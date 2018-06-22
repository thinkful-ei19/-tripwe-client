import {
  FETCH_TRIP_DATA_SUCCESS,
  FETCH_TRIP_DATA_ERROR
} from "../actions/trip";
import { ADD_PLAN } from "../actions/plans";
import { ADD_ACCOMMODATION_SUCCESS } from "../actions/accommodations";

const initialState = {
  closestTrip: {
    group: [],
    trip: {
      description: ""
    }
  },
  upcomingTrips: "",
  previousTrips: "",
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_TRIP_DATA_SUCCESS) {
    //console.log(action.data.upcomingTrips);
    return Object.assign({}, state, {
      closestTrip: action.data.closestTrip,
      upcomingTrips: action.data.upcomingTrips,
      previousTrips: action.data.previousTrips,
      error: null
    });
  } else if (action.type === FETCH_TRIP_DATA_ERROR) {
    // console.log(action, "ACTION ERROR");
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === ADD_PLAN) {
    // console.log(action.data, "data");
    let plans = state.closestTrip.plans;
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        plans: [...plans, action.data]
      })
    });
  } else if (action.type === ADD_ACCOMMODATION_SUCCESS) {
    // console.log(action.newAccommodation, "see action");
    let acc = action.newAccommodation;
    // acc.users = [
    //   ...state.closestTrip.accommodations.users,
    //   action.userResult[0]
    // ];
    console.log(acc, "acccomm");
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        accommodations: [...state.closestTrip.accommodations, acc]
      })
    });
  }
  // { result: Array(1), userResult: Array(1) }
  // result
  // :
  // [{ … }]
  // userResult
  // :
  // [{ … }]
  // __proto__: Object
  return state;
}
