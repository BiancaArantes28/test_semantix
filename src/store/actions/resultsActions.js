export const FETCH_RESULTS = 'FETCH_RESULTS';
export const FETCH_RESULTS_SUCCESSFUL = 'FETCH_RESULTS_SUCCESSFUL';
export const FETCH_RESULTS_FAILED = 'FETCH_RESULTS_FAILED';

export const fetchResults = () => ({
    type: FETCH_RESULTS,
});

export const fetchResultsSuccessful = (payload) => ({
    type: FETCH_RESULTS_SUCCESSFUL,
    payload,
});

export const fetchResultsFailed = (error) => ({
    type: FETCH_RESULTS_FAILED,
    payload: error,
});