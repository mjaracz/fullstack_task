import { ReducerAction } from '../types'

const initialState = {
  loading: false,
  updateUser: undefined,
  error: '',
}
export const changePassReducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case 'PUT_CHANGE_PASS': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_CHANGE_PASS': {
      return {
        ...state,
        loading: false,
        updateUser: action.payload,
      }
    }
    case 'ERROR_CHANGE_PASS': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case 'CLEAN_CHANGE_PASS': {
      return {
        loading: false,
        updateUser: undefined,
        error: '',
      }
    }
    default: {
      return state
    }
  }
}
