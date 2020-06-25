import { SignInState } from '../signIn/redux/types'
import { UserProfileState } from '../profile/redux/types'
import { SignUpState } from '../signUp/redux/types'
import { RememberPassState } from '../rememberPass/redux/types'
import { ChangePassState } from '../changePass/redux/types'
import { ProductsState } from '../productsList/redux/types'

export interface RootState {
  signIn: SignInState
  signUp: SignUpState
  userProfile: UserProfileState
  rememberPass: RememberPassState
  changePass: ChangePassState
  products: ProductsState
}
