import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth';

import { TOGGLE_REGISTRATION_FORM } from '../actions/toggle-registration';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null,
    displayRegistration: false
};

export default function reducer(state = initialState, action) {
    if (action.type === TOGGLE_REGISTRATION_FORM) {
        return Object.assign({}, state, {
            displayRegistration: !state.displayRegistration
        });
    } else if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}
