import { ReducerAction } from '../types'

const initialState = {
  loading: false,
  list: [],
  error: '',
}
export const productsReducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_PRODUCTS': {
      return {
        ...state,
        loading: false,
        list: action.payload,
      }
    }
    case 'ERROR_PRODUCTS': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case 'CLEAN_PRODUCTS': {
      return {
        loading: false,
        list: [],
        error: '',
      }
    }
    default: {
      return state
    }
  }
}
