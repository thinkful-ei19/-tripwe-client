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
import {
  EDIT_TRIP_SUCCESS
} from "../actions/edit-trip";

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
  } else if (action.type === ADD_USER_TO_ACCOMMODATION_SUCCESS) {
    return Object.assign({}, state, {
      closestTrip: Object.assign({}, state.closestTrip, {})
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
          transactions: state.closestTrip.budget.transactions.filter(budget => budget.id !== action.id)
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
