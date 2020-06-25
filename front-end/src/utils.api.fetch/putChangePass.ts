export const putChangePass = (token: string, body: { password: string }, signal: AbortSignal) =>
  fetch('http://localhost:8080/users/change-pass', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',

      Authorization: ` Bearer ${token}`,
    },
    body: JSON.stringify(body),
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode === 401) throw data.error
      if (data.statusCode === 403) throw data.message
      else return data
    })
