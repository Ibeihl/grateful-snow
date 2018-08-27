import {
    GET_REPORT_REQUEST,
    GET_REPORT_ERROR,
    GET_REPORT_SUCCESS
} from '../actions/get-report';

const initialState = {
    loading: false,
    error: null,
    searchReport: null,
    reports: []
};

export function reportReducer(state = initialState, action) {
    if (action.type === GET_REPORT_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }
    if (action.type === GET_REPORT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    }
    if (action.type === GET_REPORT_SUCCESS) {
        return Object.assign({}, state, {
            searchReport: action.searchReport,
            loading: false
        })
    }
    return state;
}
