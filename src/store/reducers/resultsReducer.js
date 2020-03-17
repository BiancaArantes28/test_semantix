import _ from 'lodash';
import {
    FETCH_RESULTS,
    FETCH_RESULTS_FAILED,
    FETCH_RESULTS_SUCCESSFUL,
} from '../actions/resultsActions';

const withoutError = (state) => _.omit(state, 'error');

const RESULTS_STATUS = {
    'NOT_FETCHED': 'not fetched',
    'INPROGRESS': 'inprogress',
    'FETCHED': 'fetched',
};

const defaultState = {
    status: RESULTS_STATUS.NOT_FETCHED,
    results: [],
};

const successfulResults = (state, payload) => {
    console.log(payload);
    return {
        ...withoutError(state),
        results: payload,
        status: RESULTS_STATUS.FETCHED,
    }
};

export default function results(state = defaultState, action) {
    switch(action.type) {
        case FETCH_RESULTS:
            return { ...state, status: RESULTS_STATUS.INPROGRESS };
        case FETCH_RESULTS_SUCCESSFUL:
            return successfulResults(state, action.payload);
        case FETCH_RESULTS_FAILED:
            return { ...state, error: action.payload, status: RESULTS_STATUS.FETCHED };
        default:
            return state;
    }
}