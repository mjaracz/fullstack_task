import { call, put, cancelled, takeLatest } from 'redux-saga/effects'
import { postSignUp } from '../../../utils.api.fetch'
import { SagaAction } from '../types'

function* sagaSignUp(action: SagaAction) {
  const abortController = new AbortController()
  try {
    const data = yield call(postSignUp, action.body, abortController.signal)
    yield put({ type: 'FETCH_SIGN_UP', payload: data })
  } catch (e) {
    if (yield cancelled()) abortController.abort()
    yield put({ type: 'ERROR_SIGN_UP', payload: e })
  }
}

export function* signUpWatcher() {
  yield takeLatest('POST_SIGN_UP', sagaSignUp)
}
