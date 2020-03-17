import { all, call, put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_RESULTS,
    fetchResultsFailed,
    fetchResultsSuccessful,
 } from '../actions/resultsActions';
 import { getSemantixAPIURL } from '../../config/getPATH';
import { fetchGet } from './sagaUtils';

 export function* doFetchResults() {
     try {
        const serviceBaseUrl = getSemantixAPIURL();
        const endpoint = `${serviceBaseUrl}/anual-result`;
        
        const response = yield call(fetchGet, endpoint);
        yield put(fetchResultsSuccessful(response));
     } catch(error) {
        yield put(fetchResultsFailed(error));
     }
 }

 export default function* rootSaga() {
     return yield all([
         takeLatest(FETCH_RESULTS, doFetchResults)
     ])
 }