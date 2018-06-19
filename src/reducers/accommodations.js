import {
    SHOW_DETAILS
} from '../actions/accommodations';

const initialState = {
    showAccDetails: false,
};

export default function reducer(state = initialState, action) {
    if (action.type === SHOW_DETAILS ) {
        return Object.assign({}, state, {
            showAccDetails: action.id
            })
        }
    return state;
}