export interface ProductsState {
  loading: boolean
  list: Product[]
  error: string
}

export interface Product {
  _id: string
  productId: number
  userId: number
  name: string
  price: number
  quantity: number
  description?: string
  currency: ProductsCurrency
  type: string
}

export interface ProductsCurrency {
  baseCurrency: string
  currency: string
  worth: number
}

export interface SagaAction {
  type: string
  token: string
}

export interface ReducerAction {
  type: string
  payload: reducerPayload
}

export type reducerPayload = boolean | Product[]
