import { combineReducers } from 'redux'
import { signInReducer } from '../signIn/redux/reducers'
import { userProfileReducer } from '../profile/redux/reducers'
import { signUpReducer } from '../signUp/redux/reducers'
import { rememberPassReducer } from '../rememberPass/redux/reducers'
import { changePassReducer } from '../changePass/redux/reducers'
import { productsReducer } from '../productsList/redux/reducers'

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  userProfile: userProfileReducer,
  rememberPass: rememberPassReducer,
  changePass: changePassReducer,
  products: productsReducer,
})
