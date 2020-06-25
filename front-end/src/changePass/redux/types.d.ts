export interface ChangePassState {
  loading: boolean
  updateUser: object
  error: string
}

export interface SagaAction {
  type: string
  token: string
  body: { password: string }
}

export interface ReducerAction {
  type: string
  payload: reducerPayload
}

export type reducerPayload = boolean | string
