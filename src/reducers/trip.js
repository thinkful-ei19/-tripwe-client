import {
    FETCH_TRIP_DATA_SUCCESS,
    FETCH_TRIP_DATA_ERROR,
    ADD_PLAN
} from '../actions/trip';

import {
    ADD_BUDGET_SUCCESS
} from "../actions/budget";

import {
  RENDER_TRIP_SUCCESS
} from "../actions/trips-list";


const initialState = {
    closestTrip: {
        group: [],
        trip: {
            description: ''
        },
        plans: []
    },
    upcomingTrips: '',
    previousTrips: '',
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
        console.log(action, 'ACTION ERROR');
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
    } else if (action.type === ADD_BUDGET_SUCCESS) {
        return Object.assign({}, state, {
          closestTrip: Object.assign({}, state.closestTrip, {
              budget: Object.assign({}, state.closestTrip.budget, {
                available: action.newBudget.updatedBudget[0].available,
                transactions: [...state.closestTrip.budget.transactions, action.newBudget.transaction[0]]
              })
          })
        });
    } else if (action.type === RENDER_TRIP_SUCCESS) {
        return Object.assign({}, state, {
            closestTrip: action.data,
            error: null
        });
    }
    return state;
}
