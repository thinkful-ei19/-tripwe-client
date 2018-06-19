import { CREATE_NEW_TRIP_INIT, CANCEL_NEW_TRIP_INIT } from '../actions/create-new-trip';

const initialState = {
    isCreatingNewTrip: false,
    step: null
};

export default function reducer(state = initialState, action) {
    if (action.type === CREATE_NEW_TRIP_INIT) {
        return Object.assign({}, state, { isCreatingNewTrip: true, step: 1 });
    } else if (action.type === CANCEL_NEW_TRIP_INIT) {
        return Object.assign({}, state, { isCreatingNewTrip: false, step: null });
    }
    return state;
}