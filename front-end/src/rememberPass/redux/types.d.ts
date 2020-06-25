export interface RememberPassState {
  loading: boolean
  message: string
  error: string
}

export interface SagaAction {
  type: string
  username: string
}

export interface ReducerAction {
  type: string
  payload: reducerPayload
}

export type reducerPayload = boolean | string
