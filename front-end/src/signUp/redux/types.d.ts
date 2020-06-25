export interface SignUpState {
  loading: boolean
  addedUser: UserRes
  error: string
}

export interface UserRes {
  _id: string
  userId: number
  username: string
  password: string
  __v: number
}

export interface ReqBody {
  username: string
  password: string
  name: string
  surname: string
}

export interface SagaAction {
  type: string
  body: ReqBody
}

export interface ReducerSignUpAction {
  type: string
  payload: reducerSignUp
}

export type reducerSignUp = boolean | UserRes
