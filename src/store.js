import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import tripReducer from './reducers/trip';
import createNewTripReducer from './reducers/create-new-trip';
import planReducer from './reducers/plans';
<<<<<<< HEAD
import accommodationReducer from './reducers/accommodations';
=======
import budgetReducer from './reducers/budgets';
>>>>>>> previous-trips
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        trip: tripReducer,
<<<<<<< HEAD
        createNewTrip: createNewTripReducer,
        plan:planReducer,
        accommodation:accommodationReducer
=======
        plan: planReducer,
        budget: budgetReducer
>>>>>>> previous-trips
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
