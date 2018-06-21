import { SET_SEARCH_AIRPORT_LIST } from '../actions/searchAirports';

const initialState = {
    list: []
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_SEARCH_AIRPORT_LIST) {
        return Object.assign({}, state, { list: action.list });
    }
    return state;
}
