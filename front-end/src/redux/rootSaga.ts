import {all} from 'redux-saga/effects';
import {signInWatcher, userProfileWatcher} from '../signIn/redux/sagas';

export function* rootSaga() {
  yield all([
    signInWatcher(),
    userProfileWatcher(),
  ])
}