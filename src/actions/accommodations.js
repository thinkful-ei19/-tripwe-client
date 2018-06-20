import { API_BASE_URL } from '../config';

export const SHOW_DETAILS = 'SHOW_DETAILS'
export const showDetails = (id) => ({
    type: SHOW_DETAILS,
    id
});