import { call, put, cancelled, takeLatest } from 'redux-saga/effects'
import { SagaAction } from '../types'
import { getProducts } from '../../../utils.api.fetch/getProducts'

function* sagaProducts(action: SagaAction) {
  const abortController = new AbortController()
  try {
    const data = yield call(getProducts, action.token, abortController.signal)
    yield put({ type: 'FETCH_PRODUCTS', payload: data })
  } catch (e) {
    if (yield cancelled()) abortController.abort()
    yield put({ type: 'ERROR_PRODUCTS', payload: e })
  }
}

export function* productsWatcher() {
  yield takeLatest('GET_PRODUCTS', sagaProducts)
}
