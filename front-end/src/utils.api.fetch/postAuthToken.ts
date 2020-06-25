import { ReqBody } from '../signIn/redux/types'

export const postAuthLogin = async (body: ReqBody, signal: AbortSignal) =>
  fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
    },
    body: JSON.stringify(body),
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode === 401) throw data.error
      else return data
    })
