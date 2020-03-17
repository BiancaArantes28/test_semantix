
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_RESULTS,
    fetchResultsFailed,
    fetchResultsSuccessful,
 } from '../actions/resultsActions';
 import { getSemantixAPIURL } from '../../config/getPATH';

 export function* doFetchResults() {
     try {
        const serviceBaseUrl = getSemantixAPIURL();
        console.log(serviceBaseUrl);
        const payload = {
            success: true,
        }
        yield put(fetchResultsSuccessful(payload));
     } catch(error) {
        yield put(fetchResultsFailed(error));
     }
 }

 export default function* rootSaga() {
     return yield all([
         takeLatest(FETCH_RESULTS, doFetchResults)
     ])
 }