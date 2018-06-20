import {
    CREATE_NEW_TRIP_INIT,
    CANCEL_NEW_TRIP_INIT,
    CREATE_NEW_TRIP_REQUEST,
    CREATE_NEW_TRIP_SUCCESS,
    CREATE_NEW_TRIP_ERROR
} from '../actions/create-new-trip';

const initialState = {
    isCreatingNewTrip: false,
    step: null,
    loading: false,
    error: null,
    trip: null
};

export default function reducer(state = initialState, action) {
    if (action.type === CREATE_NEW_TRIP_INIT) {
        return Object.assign({}, state, { isCreatingNewTrip: true, step: 1 });
    } else if (action.type === CANCEL_NEW_TRIP_INIT) {
        return Object.assign({}, state, { isCreatingNewTrip: false, step: null });
    } else if (action.type === CREATE_NEW_TRIP_REQUEST) {
        return Object.assign({}, state, { loading: true });
    } else if (action.type === CREATE_NEW_TRIP_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            trip: action.data,
            error: null
        });
    } else if (action.type === CREATE_NEW_TRIP_ERROR) {
        return Object.assign({}, state, { loading: false, error: action.error });
    }
    return state;
}