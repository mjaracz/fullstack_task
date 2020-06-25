import { all } from 'redux-saga/effects'
import { signInWatcher } from '../signIn/redux/sagas'
import { signUpWatcher } from '../signUp/redux/sagas'
import { userProfileWatcher } from '../profile/redux/sagas'
import { rememberPassWatcher } from '../rememberPass/redux/sagas'
import { changePassWatcher } from '../changePass/redux/sagas'
import { productsWatcher } from '../productsList/redux/sagas'

export function* rootSaga() {
  yield all([signInWatcher(), signUpWatcher(), userProfileWatcher(), rememberPassWatcher(), changePassWatcher(), productsWatcher()])
}
