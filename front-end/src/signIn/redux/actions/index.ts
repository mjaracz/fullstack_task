import { ReqBody } from '../types'

export const postSignIn = (body: ReqBody) => ({
  type: 'POST_SIGN_IN',
  payload: body,
})
