import {
    GET_REPORT_REQUEST,
    GET_REPORT_ERROR,
    GET_REPORT_SUCCESS
} from '../actions/get-report';
import {
    // GET_QUIVER_REQUEST,
    // GET_QUIVER_ERROR,
    GET_QUIVER_SUCCESS
} from '../actions/quiver';
import {
    GET_QUIVER_REPORT_SUCCESS,
    GET_QUIVER_REPORT_ERROR,
    GET_QUIVER_REPORT_REQUEST
} from '../actions/get-quiver-reports';

const initialState = {
    loading: false,
    quiverLoading: false,
    quiverError: null,
    error: null,
    searchReport: null,
    quiverReports: [],
    skiAreas: []
};

export function reportReducer(state = initialState, action) {
    if (action.type === GET_QUIVER_REPORT_ERROR) {
        return Object.assign({}, state, {
            quiverLoading: false,
            quiverError: action.error
        })
    }
    if (action.type === GET_QUIVER_REPORT_REQUEST) {
        return Object.assign({}, state, {
            quiverLoading: true
        })
    }
    if (action.type === GET_QUIVER_REPORT_SUCCESS) {
        return Object.assign({}, state, {
            quiverReports: [...state.quiverReports, action.quiverReport],
            quiverLoading: false
        })
    }
    if (action.type === GET_QUIVER_SUCCESS) {
        return Object.assign({}, state, {
            skiAreas: action.quiver.skiAreas,
            loading: false
        })
    }
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
