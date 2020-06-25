import { ReducerProfileAction, UserProfileState } from '../types'

const initialState = {
  loading: false,
  profile: {
    userId: undefined,
    username: '',
  },
  error: '',
}
export const userProfileReducer = (state: UserProfileState = initialState, action: ReducerProfileAction) => {
  switch (action.type) {
    case 'GET_USER_PROFILE': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_PROFILE': {
      return {
        ...state,
        loading: false,
        profile: action.payload,
      }
    }
    case 'CLEAR_PROFILE': {
      return {
        ...state,
        loading: false,
        profile: { userId: undefined, username: '' },
        error: '',
      }
    }
    case 'PROFILE_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
