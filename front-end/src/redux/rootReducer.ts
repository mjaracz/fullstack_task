import {combineReducers} from 'redux';
import {userProfileReducer, signInReducer} from '../signIn/redux/reducers';

export const rootReducer = combineReducers({
  signIn: signInReducer,
  userProfile: userProfileReducer
});