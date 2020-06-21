import {call, put, cancelled, takeLatest} from 'redux-saga/effects';
import {apiAuthLogin} from '../../../redux/api/auth';
import {SagaTokenAction} from '../types';

function* postTokenSaga(action: SagaTokenAction) {
  const abortController = new AbortController();
  try {
    const data = yield call(apiAuthLogin, action.payload, abortController.signal);
    yield put({type: 'FETCH_SIGN_IN', payload: data.access_token})
  }
  catch(e) {
    if(yield(cancelled())) abortController.abort();
    yield put({type: 'ERROR_SIGN_IN', payload: e})
  }
}

export function* signInWatcher() {
  yield takeLatest('GET_SIGN_IN', postTokenSaga)
}