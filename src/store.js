import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { loadAuthToken } from "./local-storage";
import authReducer from "./reducers/auth";
import protectedDataReducer from "./reducers/protected-data";
import tripReducer from "./reducers/trip";
import createNewTripReducer from "./reducers/create-new-trip";
import futureTripReducer from "./reducers/future-trips";
import accommodationReducer from "./reducers/accommodations";
import searchAirportsReducer from "./reducers/searchAirports";
import budgetReducer from "./reducers/budgets";
import planReducer from "./reducers/plans";
import editTripReducer from "./reducers/edit-trip";

import { setAuthToken, refreshAuthToken } from "./actions/auth";

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    trip: tripReducer,
    createNewTrip: createNewTripReducer,
    futureTrip: futureTripReducer,
    plan: planReducer,
    accommodation: accommodationReducer,
    searchAirports: searchAirportsReducer,
    budget: budgetReducer,
    editTrip: editTripReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
