import {SignInState} from '../signIn/redux/types';
import {UserProfileState} from '../profile/redux/types';

export interface RootState {
  signIn: SignInState,
  userProfile: UserProfileState,
}