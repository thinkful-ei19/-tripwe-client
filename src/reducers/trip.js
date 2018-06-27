import {
  FETCH_TRIP_DATA_SUCCESS,
  FETCH_TRIP_DATA_ERROR
} from "../actions/trip";
import { ADD_PLAN, DELETE_PLAN } from "../actions/plans";
import {
  ADD_ACCOMMODATION_SUCCESS,
  ADD_USER_TO_ACCOMMODATION_SUCCESS,
  DELETE_ACCOMMODATION
} from "../actions/accommodations";
import { UPDATE_ACCOMMODATION_SUCCESS } from "../actions/edit-accommodation";

import { EDIT_TRIP_SUCCESS } from "../actions/edit-trip";

import { ADD_BUDGET_SUCCESS, DELETE_BUDGET } from "../actions/budget";

import { RENDER_TRIP_SUCCESS } from "../actions/trips-list";

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
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === ADD_PLAN) {
    let plans = state.closestTrip.plans;
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        plans: [...plans, action.data]
      })
    });
  } else if (action.type === DELETE_PLAN) {
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        plans: state.closestTrip.plans.filter(plan => plan.id !== action.id)
      })
    });
  } else if (action.type === ADD_ACCOMMODATION_SUCCESS) {
    let acc = action.newAccommodation.result[0];
    let user = action.newAccommodation.userResult;
    acc.users = user;
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        accommodations: [...state.closestTrip.accommodations, acc]
      })
    });
  } else if (action.type === UPDATE_ACCOMMODATION_SUCCESS) {
    // console.log(action, "actionnnn");
    // return Object.assign({}, state, {
    //   closestTrip: Object.assign({}, state.closestTrip, {
    //     accommodations: Object.assign(
    //       {},
    //       state.closestTrip.accommodations.map(accommodation => {
    //         if (accommodation.id === action.newAccommodation.accommodationId) {
    //           accommodation = {
    //             name: action.newAccommodation.updatedAccommodation.name,
    //             address: action.newAccommodation.updatedAccommodation.address,
    //             reference:
    //               action.newAccommodation.updatedAccommodation.reference,
    //             arrival: action.newAccommodation.updatedAccommodation.arrival,
    //             departure:
    //               action.newAccommodation.updatedAccommodation.departure,
    //             phone: action.newAccommodation.updatedAccommodation.phone
    //           };
    //         }
    //       })
    //     )
    //   })
    // });
  } else if (action.type === ADD_USER_TO_ACCOMMODATION_SUCCESS) {
    let acc = action.newUser.result[0];
    let users = action.newUser.userResult;
    let accommodations = [...state.closestTrip.accommodations];

    for (var i = 0; i < accommodations.length; i++) {
      if (accommodations[i].id === acc.id) {
        accommodations[i].users = users;
      }
    }
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        accommodations: accommodations
      })
    });
  } else if (action.type === DELETE_ACCOMMODATION) {
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        accommodations: state.closestTrip.accommodations.filter(
          accommodation => accommodation.id !== action.id
        )
      })
    });
  } else if (action.type === ADD_BUDGET_SUCCESS) {
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        budget: Object.assign({}, state.closestTrip.budget, {
          total: action.newBudget.updatedBudget,
          transactions: [
            ...state.closestTrip.budget.transactions,
            action.newBudget.transaction[0]
          ]
        })
      })
    });
  } else if (action.type === RENDER_TRIP_SUCCESS) {
    return Object.assign({}, state, {
      closestTrip: action.data,
      error: null
    });
  } else if (action.type === DELETE_BUDGET) {
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {
        budget: Object.assign({}, state.closestTrip.budget, {
          total: state.closestTrip.budget.total,
          transactions: state.closestTrip.budget.transactions.filter(
            budget => budget.id !== action.id
          )
        })
      })
    });
  }
  // else if (action.type === EDIT_TRIP_SUCCESS) {
  //     return Object.assign({}, state, {
  //       closestTrip: action.data.closestTrip
  //     });
  // }
  return state;
}
