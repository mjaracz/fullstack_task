export interface UserProfileState {
  loading: boolean;
  profile: profile;
  error: string;
}

export type profile = {
  userId: number;
  username: string;
}

export interface SagaProfileAction {
  type: string;
  token: string;
}

export interface ReducerProfileAction {
  type: string;
  payload: reducerProfilePayload;
}

export type reducerProfilePayload = boolean | string | profile;
